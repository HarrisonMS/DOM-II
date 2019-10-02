// Your code goes here

// FAILEDD IMG CHANGE


// const busImage = document.querySelectorAll(".funBus");

// busImage.addEventListener("dblclick", () => {
//     busdImage.src="...img/futureBus.jpg"
// });


// #####   1    CHANGE NAV LINK COLORS  ON CLICK
document.querySelectorAll("a").forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = "#5a4e5e";
    })
})

//####    2    CHANGE HEADER BACKGROUND ON DBLCLICK

const header= document.querySelector(".main-navigation");

header.addEventListener("dblclick", () => {
    header.style.backgroundColor="#81997f";
})


// //////========  3   BODY BACKGROUND CHANGE ON SCORLL
const body = document.querySelector("body")
window.addEventListener("scroll", () => {
    body.style.backgroundColor = "#826f60";
})

///////######    4  HEADER IMG CHANGE ON DBLCLK

const changeImg = document.querySelector(".funBus");
changeImg.addEventListener("auxclick", () => {
changeImg.src= "img/futureBus.jpg"
console.log(changeImg)
})

// ===========  #####    5 

const headerLogo = document.querySelector('.logo-heading');

// INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
headerLogo.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");


/// ####  6 

const fontWheel = document.querySelector(".destination p");

fontWheel.addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "20px";
}

// const fontWheel = document.querySelector(".destination p");

// fontWheel.addEventListener("wheel", myFunction);

// function myFunction() {
//   this.style.fontSize = "35px";
// }


// const footer = document.getElementsByClassName(".footer") = (el =>{
//     footer.addEventListener
// });

// changeImg.addEventListener("drag", function(event) {

// }, false);

// const bestBus = document.querySelector("img/destination.jpg")
// window.addEventListener("resize", () => {
//   changeImg.src= "img/betterBus"
// })

// var enterEventCount = 0;
// var leaveEventCount = 0;
// const mouseTarget = document.getElementById("content-destination");

// mouseTarget.addEventListener("content-destination", e => {
//   mouseTarget.style.border = '5px dotted orange';
//   enterEventCount++;
//   addListItem('This is mouseenter event ' + enterEventCount + '.');
// });

// mouseTarget.addEventListener('mouseleave', e => {
//   mouseTarget.style.border = '1px solid #333';
//   leaveEventCount++;
//   addListItem('This is mouseleave event ' + leaveEventCount + '.');
// });


// const headerImg = document.querySelector(".funBus")
// headerImg.addEventListener('focus', (event) => {
//     event.target.style.display = 'none';    
//   });

// document.querySelectorAll("text-content").forEach(el => {
//     el.addEventListener("scroll", () => {
//         el.style.color = "red";
//     })
// });







// const navLogoHeading = document.querySelector('.logo-heading');

// INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
// navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");
// const mainContent = document.querySelector("content-section");

// window.addEventListener("scroll", () => {
//     main-content.style.background-color = "red";
// })

// html.addEventListener('scroll', () => {
//     body.style.backgroundColor="#826f60"
// })
