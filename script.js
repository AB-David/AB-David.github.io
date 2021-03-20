let projects = [
    {
        repo:"Real-Time-Bus-Tracker",
        image:"",
        desc:"Built and manipulated maps through asyncronous programming to show the location of buses in Boston in real time by retrieving that data from MBTA. Currently working on addong the ability to see available seats on each bus as well "
    },
    {
        repo:"Eyes-movement",
        image:"",
        desc:"Eyes movement that tracks the user's mouse pointer on the display while using JavaScript to set the web page styles."
    },
    {
        repo:"Ball-factory",
        image:"",
        desc:"3"
    },
    {
        repo:"spotify-clone",
        image:"",
        desc:"Creating a web clone from scratch by inspecting the websites"
    }
];

window.onload = ()=>{
    let ul = document.getElementById('projects-dropdown')
    for (i=0; i<projects.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.classList.add('dropdown-item')
        a.href = repoAddress(projects[i].repo)
        a.innerHTML = projects[i].repo;
        li.appendChild(a)
        ul.appendChild(li)
        console.log('created element' + li)
    }

    let container = document.getElementById('projects-grid')
    for (i=0; i<projects.length; i++) {
        let div = document.createElement('div')
        div.classList.add('projects-grid-item')
        let cardShadowDiv = document.createElement('div')
        cardShadowDiv.classList.add('card','shadow-sm')
        div.appendChild(cardShadowDiv)
        let cardImg = document.createElement('img')
        cardImg.src = presentImage(projects[i].image)
        cardShadowDiv.appendChild(cardImg)
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        cardShadowDiv.appendChild(cardBody)
        let h4 = document.createElement('h4')
        h4.classList.add('capitalize')
        h4.innerHTML = presentName(projects[i].repo)
        cardBody.appendChild(h4)
        let p = document.createElement('p')
        p.classList.add('card-text')
        p.innerHTML = projects[i].desc
        cardBody.appendChild(p)
        let flexDiv = document.createElement('div')
        flexDiv.classList.add('d-flex','justify-content-between','align-items-center')
        cardBody.appendChild(flexDiv)
        let btnDiv = document.createElement('div')
        btnDiv.classList.add('btn-group')
        flexDiv.appendChild(btnDiv)
        let aDemo = document.createElement('a')
        aDemo.classList.add('btn','btn-sm','btn-outline-secondary')
        aDemo.href = demoAddress(projects[i].repo)
        aDemo.innerHTML = 'Demo';
        btnDiv.appendChild(aDemo)
        let aRepo = document.createElement('a')
        aRepo.classList.add('btn','btn-sm','btn-outline-secondary')
        aRepo.href = repoAddress(projects[i].repo)
        aRepo.innerHTML = 'Code';
        btnDiv.appendChild(aRepo)

        container.appendChild(div)
    }


}

function repoAddress(name){
    return 'https://github.com/AB-David/' + name
}
function demoAddress(name){
    return 'https://AB-David.github.io/' + name
}
function presentName(name){
    return name.replace(/-/g, " ")
}
function presentImage(url){
    if (url == '') {
        return './assets/img/1.gif'
    }
    return url 
}
