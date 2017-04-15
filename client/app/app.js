

document.addEventListener('DOMContentLoaded', app());

function app(){
    fetch('/api/posts', {method:'GET'}).then(function(result){
        return result.json()
    }).then(createElements)
}


function createElements(posts){
    console.log(posts)
    var mountPoint = document.getElementById('app')
    var items = posts.map(function(item , index){
        return `
            <div>
                <h1>${item.title}</h1>
                <p>${item.content}</p>
            </div>
        `
    })

    mountPoint.innerHTML = items
}
