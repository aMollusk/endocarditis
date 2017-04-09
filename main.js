// git pull
// We got this back from the server
// git add .
// git commit -m "msg"

// git reset --hard

// press windows key and type POWERSHELL
// cd - change directory
// ls - view directory

// http-server -p 1234


let data = [{
  url:'http://www.abc.net.au/news/science/2017-04-06/crown-of-thorns-starfish-dna-reveals-coral-killers-weakness/8415058',
  title:`Crown-of-thorns starfish DNA reveals coral killer's weakness`,
  description:`A unique messaging system used by the crown-of-thorns starfish to 'talk' to each other could hold the key to saving the Great Barrier Reef from the marine predator's devastating attacks.`,
  tag:'science'
},{
  url:'http://www.abc.net.au/news/2017-04-06/stargazing-live-four-planets-discovered-in-new-solar-system/8423142',
  title:`Stargazing Live viewers find four-planet solar system via crowd-sourcing project`,
  description:`Australian volunteer citizen scientists have found four previously unknown planets orbiting a nearby star thanks to a crowd-sourcing project aired on the ABC's Stargazing Live.`,
  tag:'science'
},{
    url: 'http://www.abc.net.au/news/2017-04-08/nrl-scorecentre-manly-dragons-titans-raiders-cowboys-tigers/8414502',
    title: 'Manly v Dragons, Titans v Raiders, Cowboys v Tigers: NRL round 6 live scores, stats and commentary',
    description: 'Round-six NRL action continues with the Titans hosting the Raiders and the Cowboys taking on the Tigers. Follow all the live scores, stats and commentary.',
    tag: 'sports'
},{
    url: 'http://www.abc.net.au/news/2017-04-08/liberals-hope-to-keep-seats-despite-swings-in-nsw-by-elections/8427742',
    title: 'NSW by-elections in Manly, North Shore and Gosford to test Gladys Berejiklian Government',
    description: 'Polling booths have opened for by-elections in the New South Wales electorates of North Shore, Manly and Gosford.',
    tag: 'politics'
},{
    url: 'http://www.abc.net.au/news/2017-04-08/trump-xi-showdown-fails-to-materialise-at-meeting/8427576',
    title: 'Trump, Xi showdown on trade and North Korea fails to materialise at Mar-a-Lago meeting',
    description:`Trump, Xi showdown on trade and North Korea fails`,
    tag: 'international'
},{
    url: 'http://www.abc.net.au/news/2017-04-05/heath-ledger-documentary-trailer-released/8417832',
    title: 'I Am Heath Ledger documentary to detail life and struggles of late Australian actor',
    description: 'The first look at an upcoming documentary that will detail the life, passions and struggles of late Australian actor Heath Ledger has been released',
    tag: 'art'
}]



document.addEventListener('DOMContentLoaded', startApp());



function startApp(){
    console.log('app start')

    // fetch('http://localhost:9000/latest').then(function(data){
    //     console.log(data)
    // })
    let mountPoint = document.getElementById('app')
    let mountPointPolitics = document.getElementById('appPolitics')
    let container = document.createElement('div')
    let containerPolitics = document.createElement('div')


    // Read up on REDUCE, MAP, FILTER


    let politicsItems = data.filter(function(item){
        return item.tag === 'politics'
    })


    // You could map DATA instead
    let allDivs = data.map(function(item){
        return `
            <div class="container">
                <h1>${item.title}</h1>
                <p>${item.description.substr(0, 99)}</p>
                <a target="_blank" href="${item.url}">click for more</a>
            </div>`
    })
    let politicsDivs = politicsItems.map(function(item){
        return `
            <div class="container">
                <h1>${item.title}</h1>
                <p>${item.description.substr(0, 99)}</p>
                <a target="_blank" href="${item.url}">click for more</a>
            </div>`
    })



    console.log(allDivs.reduce(function(acc, val){
        return acc + val
    }, ''))


    console.log(politicsDivs.reduce(function(acc, val){
        return acc + val
      }, ''))


    container.innerHTML = allDivs.reduce(function(acc, val){
        return acc + val
    }, '')

    containerPolitics.innerHTML = politicsDivs.reduce(function(acc, val){
        return acc + val
    }, '')

    mountPoint.appendChild(container)
    mountPointPolitics.appendChild(containerPolitics)

  }

// fetch








// DATABASE SAVE DOWN HERE
