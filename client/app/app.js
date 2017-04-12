var template = `

`

document.addEventListener('DOMContentLoaded', app());

function app(){
    fetch('/api/posts', {method: 'GET'}).then(function(res){
        return res.json()
    }).then(function(data){
        createPostList(data)
    })
}

function createPostList(postArray){
    const posts = postArray.map(function(post){
        return `
                <div class="container">
                    <h1>${post.title}</h1>
                    <p>${post.content}</p>
                    <a target="_blank" href="${post.url}">click for more</a>
                </div>`
    })

    const postString = posts.reduce(function(acc, val){
        return acc + val
    }, '')

    render(postString)
}


function render(elm){
    document.getElementById('app').innerHTML = elm
}