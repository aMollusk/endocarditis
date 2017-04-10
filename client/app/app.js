var template = `
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">Logo</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index.html">FrontPage</a></li>
                <li><a href="politics.html">Politics</a></li>
                <li><a href="international.html">International</a></li>
                <li><a href="science.html">Science</a></li>
                <li><a href="art.html">Art</a></li>
                <li><a href="sports.html">Sports</a></li>
            </ul>
            </div>
        </div>
    </nav>
`

document.addEventListener('DOMContentLoaded', app());

function app(){
    var mountPoint = document.getElementById('app')
    var contentPoint = document.createElement('div')
    contentPoint.id = 'content'
    mountPoint.innerHTML = template
    mountPoint.appendChild(contentPoint)
}

