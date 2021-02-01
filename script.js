
const getPage = (page) => {
    //Pagination
    const itemNo = 5;
    const max =( page * itemNo);
    const min =( page * itemNo) - itemNo;
    
    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        let html = '';
        res.forEach((post, i) => {
            if(i >= min && i < max){
                html += `<div class="card">
                <div class="card-header">
                Post ${post.id}
                </div>
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="btn btn-dark">See more</a>
                </div>
              </div>`
            }
        })
    
        document.querySelector('.cards').innerHTML = html;
    })
}

getPage(1)

document.querySelectorAll('.page-item').forEach(x => {
    x.addEventListener('click', (e) => {
        getPage(parseInt(e.target.textContent))
        e.preventDefault()
    })
})

document.querySelectorAll('.nav-link').forEach(x =>
    {
        x.addEventListener('click', (e)=> {
            document.querySelector('#navbarNavAltMarkup').style.display ='none';
            document.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
        })
    })
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if(document.querySelector('#navbarNavAltMarkup').style.display ==='none'
    )
    document.querySelector('#navbarNavAltMarkup').style.display ='block'

})