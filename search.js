function pesquisaGH() {
    var form = document.getElementById("myForm2")
    var search = document.getElementById('Search').value

    document.getElementById("Search").click()
    

    form.addEventListener('submit',function(i){
        i.preventDefault()
        
        const xhr = new XMLHttpRequest();
        const searchUrl = `https://api.github.com/search/users?q=` + search
        xhr.open('GET', searchUrl, true);
        xhr.onload = function() { 
            const data = JSON.parse(this.response);
            console.log(data)

            

            for (let l in data.items) {

                if (l < 10) {
                    let ul = document.getElementById('pesquisa');
        
                    let li = document.createElement('li');
        
                    li.classList.add('list-group-item')
        
                        li.innerHTML = `
                            <img src="${data.items[l].avatar_url}" class="card-img-top">
                            <p><strong>${data.items[l].login}</strong></p>
                            <p><strong>Link da página do usuário:</strong> <a href="${data.items[l].html_url}">${data.items[l].html_url}</a></p>                            
                        `;
        
                        ul.appendChild(li);
                    }
                }

                let ff = document.getElementById('footerFinal')
                ff.innerHTML = `
                            <div class="footer">
                                <p>PUC-MG || Belo Horizonte - Minas Gerais || 05/12/2021</p>
                            </div>
                `;

            }
            
        xhr.send()
    })
}