

document.addEventListener('DOMContentLoaded', app());

function app(){
    fetch('/api/posts', {method: 'GET'}).then(function(res){
        return res.json()
    }).then(function(data){
        createPostList(data)
    })
}

function createPostList(postArray){

    let filteredPosts

    // We filter the array differently depending on the route, but the actual HTML that is sent from the server, remains the same.
    if (location.pathname.includes('science')){
        filteredPosts = postArray.filter(function(item){
            return item.tag === 'science'
        })
    } else if(location.pathname.includes('politics')) {
        filteredPosts = postArray.filter(function(item){
            return item.tag === 'politics'
        })
    } else if(location.pathname.includes('international')) {
        filteredPosts = postArray.filter(function(item){
            return item.tag === 'international'
        })
    } else if(location.pathname.includes('art')) {
        filteredPosts = postArray.filter(function(item){
            return item.tag === 'art'
        })
    } else if(location.pathname.includes('sports')) {
        filteredPosts = postArray.filter(function(item){
            return item.tag === 'sports'
        })
    } else {
        filteredPosts = postArray
    }

    const posts = filteredPosts.map(function(post){
        return `
                <div class="container">
                    <h1>${post.title}</h1>
                    <p>${post.content}</p>
                    <p>The tag of this file is <b>${post.tag}</b></p>
                    <a target="_blank" href="${post.url}">click for more</a>
                </div>`
    })

    const postString = posts.reduce(function(acc, val){
        return acc + val
    }, '')

    render(postString)
} // End createPostList()


function render(elm){
    document.getElementById('app').innerHTML = elm
}