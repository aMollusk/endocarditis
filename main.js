// We got this back from the server

let data = [{
    url: 'http://google.com',
    title: 'google',
    description: 'Description things',
    tag: 'science'
},{
    url: 'http://amazon.com',
    title: 'Amazon',
    description: 'Description things',
    tag: 'polictic'
},{
    url: 'http://facebook.com',
    title: 'facebook',
    description: 'Description things',
    tag: 'maths'
},{
    url: 'http://stackoverflow.com',
    title: 'stack overflow',
    description: 'Description things',
    tag: 'science'
}]

document.addEventListener('DOMContentLoaded', startApp());

function startApp(){
    console.log('app start')

    // fetch('http://localhost:9000/latest').then(function(data){
    //     console.log(data)
    // })
    let mountPoint = document.getElementById('app')
    let container = document.createElement('div')


    // Read up on REDUCE, MAP, FILTER


    let scienceItems = data.filter(function(item){
        return item.tag === 'science'
    })


    // You could map DATA instead
    let allDivs = scienceItems.map(function(item){
        return `
            <div>
                <h1>${item.title}</h1>
                <p>${item.description.substr(0, 14)}</p>
                <a target="_blank" href="${item.url}">click for more</a>
            </div>`
    })

    console.log(allDivs.reduce(function(acc, val){
        return acc + val
    }, ''))




    container.innerHTML = allDivs.reduce(function(acc, val){
        return acc + val
    }, '')

    mountPoint.appendChild(container)

}



// fetch








// DATABASE SAVE DOWN HERE


