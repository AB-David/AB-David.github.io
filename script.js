var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };

let projects = [
    {
        repo:"Real-Time-Bus-Tracker",
        image: "./assets/img/bus.png",
        desc:"Manipulated maps through asyncronous programming to show in real time the location of a bus in Boston by retrieving that data from MBTA. I hope to add the ability to also see available seats."
    },
    {
        repo:"Boston-Public-Salaries",
        image:"./assets/img/eyes.png",
        desc:"Programmatically manipulated a set of public JSON data from the city of Boston, representing Boston employee salaries to find the top income earners in the city."
    },
    {
        repo:"Eyes-movement",
        image:"./assets/img/json-mapping.png",
        desc:"Eyes movement that tracks the user's mouse pointer on the display while using JavaScript to set the web page styles."
    },
    {
        repo:"Pacman-factory",
        image:"./assets/img/pacmen factory.gif",
        desc:"This will create any number of pacman as a factory, then sends them all over the display with an option to increase their velocity."
    },
    {
        repo:"Gravity-Ball-factory",
        image:"./assets/img/ball_factory.gif",
        desc:"This will create any number of balls in different colors, then bounce them within a defined area while taking gravity into consideration."
    },
    {
        repo:"spotify-clone",
        image:"./assets/img/Spotify.png",
        desc:"Created a web clone from scratch by inspecting the websites design code"
    },
    {
        repo:"To-Do-List",
        image:"./assets/img/ToDo.png",
        desc:"Created a styled To-Do list application in React"
    },
    {
        repo:"React-Tic-Tac-Toe",
        image:"./assets/img/ToDo.png",
        desc:"Created a Tic Tac Toe game managing multiple states between parent and child components in React" 
    }
];

window.onload = ()=>{
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);


    let ul = document.getElementById('projects-dropdown')
    
    for (i=0; i<projects.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.classList.add('dropdown-item')
        a.href = repoAddress(projects[i].repo)
        a.innerHTML = projects[i].repo;
        li.appendChild(a)
        ul.appendChild(li)
    }

    let container = document.getElementById('projects-grid')
    if (container != null) {
        for (i=0; i<projects.length; i++) {
            let div = document.createElement('div')
            div.classList.add('projects-grid-item')
            let cardShadowDiv = document.createElement('div')
            cardShadowDiv.classList.add('card','shadow-sm')
            div.appendChild(cardShadowDiv)
            let cardImg = document.createElement('img')
            cardImg.src = presentImage(projects[i].image)
    
            let aImgLink = document.createElement('a')
            aImgLink.href = demoAddress(projects[i].repo)
            aImgLink.appendChild(cardImg)
    
            cardShadowDiv.appendChild(aImgLink)
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
