const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
//  text.addEventListener("click", function(){
//     alert("heyy")

//  })
//  var text = document.querySelectorAll("#text")

// text.forEach(function(e){
//     e.addEventListener("click",function(){
//         // alert("helloo")
//         document.querySelector("#text p").style.display= "block"
//         e.addEventListener("click",function(){
//             // alert("helloo")
//             document.querySelector("#text p").style.display= "none"
//         })
//     })

// })
// var text =document.querySelectorAll("#text")
