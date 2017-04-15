document.addEventListener('DOMContentLoaded', app());

function app(){
    fetch('/api/posts', {method:'GET'}).then(function(result){
        return result.json()
    }).then(render)
}


function render(posts){

    var mountPoint = document.getElementById('app')

    var path = location.pathname.split('/')

    var html = ''

    switch(path[1]){
      case 'posts':
        html = showPosts(path[2], posts)
        break;
      case 'account':
        html = templates.account
        break;
      case 'signup':
        html = templates.signUp(false)
        break;
      case 'othersignup':
        html = templates.signUp(true)
        break;
      default:
        html = "<h1>Home page</h1>"
    }


    mountPoint.innerHTML = html

}





function showPosts(path, posts){
  var filterPost = posts.filter(function(item , index){
    return item.tag === path
  })

  var items = filterPost.map(function(item , index){
      return `
          <div class="container">
              <h1>${item.title}</h1>
              <p>${item.content}</p>
              <a target="_blank" href=${item.url}>Click for More</a>
          </div>
      `
  })

  return items
}
