const gitUrl = "https://github.com/"
/*<img src="${username.avatar_url}" class="card-img-top">*/



function reqUser(username) {

    const xhr = new XMLHttpRequest();

    
    const url = `https://api.github.com/users/${username}`

    
    xhr.open('GET', url, true);


    xhr.onload = function() {
    
        
        const data = JSON.parse(this.response); 



        let userInfo = document.getElementById('user');

        let div = document.createElement('div');
        div.classList.add('userInfo')

            div.innerHTML = (`
                <img src="${data.avatar_url}" class="card-img-top">
                <h1>${data.name}</h1>
            `);

        userInfo.appendChild(div);
    }

    xhr.send();

}



function reqUserRep(username) {

    const xhr = new XMLHttpRequest();

    
    const repoUrl = `https://api.github.com/users/${username}/repos`

    
    xhr.open('GET', repoUrl, true);


    xhr.onload = function() {
    
        
        const data = JSON.parse(this.response);   
        
        

       


        for (let i in data) {

            if (i < 5) {

                let ul = document.getElementById('repos');

                let li = document.createElement('li');

                li.classList.add('list-group-item')

                li.innerHTML = (`
                    <p><strong>Repo:</strong> ${data[i].name}</p>
                    <p><strong>Description:</strong> ${data[i].description}</p>
                    <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                `);

                

                ul.appendChild(li);
            }

        }

    }
    
    xhr.send();


}

function reqUserInfo(username) {

    const xhr = new XMLHttpRequest();

    const url = `https://api.github.com/users/${username}/following`

    xhr.open('GET', url, true);

    xhr.onload = function() {
    
        
        const data = JSON.parse(this.response);   

        


    for (let j in data) {

        if (j < 7) {
            let ul = document.getElementById('followers');

            let li = document.createElement('li');

            li.classList.add('list-group-item')




                li.innerHTML = `
                    <img src="${data[j].avatar_url}" class="card-img-top">
                    <p><strong>${data[j].login}</strong></p>
                    <p><strong>Link da página do usuário:</strong> <a href="${data[j].html_url}">${data[j].html_url}</a></p>
                `;

                ul.appendChild(li);
            }
        }
    }

    xhr.send();
}

window.onload = () => {
    var form = document.getElementById("myForm")

    form.addEventListener('submit',function(i){
        i.preventDefault()

        var search = document.getElementById('Search').value

        const xhr = new XMLHttpRequest();
        const searchUrl = `https://api.github.com/search/users?q=` + search
        xhr.open('GET', searchUrl, true);
        xhr.onload = function() { 
            const data = JSON.parse(this.response);
            console.log(data)

            for (let l in data) {

                if (l < 7) {
                    console.log(data)
                    let ul = document.getElementById('pesquisa');
        
                    let li = document.createElement('li');
        
                    li.classList.add('list-group-item')
        
        
        
                        li.innerHTML = `
                            <img src="${data[j].avatar_url}" class="card-img-top">
                            <p><strong>${data[j].login}</strong></p>
                            <p><strong>Link da página do usuário:</strong> <a href="${data[j].html_url}">${data[j].html_url}</a></p>
                        `;
        
                        ul.appendChild(li);
                    }
                }
            }
            
        xhr.send()
    })
    
    

};

reqUser('jmarcosltc');
reqUserRep('jmarcosltc');
reqUserInfo('jmarcosltc');

