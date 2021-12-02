const gitUrl = "https://github.com/"
/*<img src="${username.avatar_url}" class="card-img-top">*/


function search(username) {
    const xhr = new XMLHttpRequest();

    const url = ``

}

function reqUser(username) {

    const xhr = new XMLHttpRequest();

    
    const url = `https://api.github.com/users/${username}`

    
    xhr.open('GET', url, true);


    xhr.onload = function() {
    
        
        const data = JSON.parse(this.response); 

        console.log(data.name);

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
                    <p><strong>Nome:</strong> ${data[j].login}</p>
                    <p><strong>Link:</strong> <a href="${data[j].url}">${data[j].url}</a></p>
                `;

                ul.appendChild(li);
            }
        }
    }

    xhr.send();
}


reqUser('thomas-crane');
reqUserRep('thomas-crane');
reqUserInfo('thomas-crane');