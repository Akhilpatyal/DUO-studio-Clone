function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

}
init()

var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 20+ "px"
  cursor.style.top = dets.y + 20+ "px"
})
// // gsap
// // gsap.from(".page1 h1,.page1 h2", {
// //   y: 10,
// //   rotate: 10,
// //   opacity: 0,
// //   delay: 0.3,
// //   duration: 0.7
// // })

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top 27%",
    end: "top 0",
    scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, 'anime')
tl.to(".page1 h2", {
  x: 100,
}, 'anime')
tl.to(".page1 video", {
  width: "90%",
}, 'anime')

// background
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top -115%",
    end: "top -130%",
    scrub: 3
  }
})
tl2.to(".main", {
  backgroundColor: "#fff",
  
})
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top -280%",
    end: "top -300%",
    scrub: 3
  }
})
tl3.to(".main",{
backgroundColor:"#000"
})

var boxes=document.querySelectorAll(".box");
boxes.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
var att=elem.getAttribute("data-img")
cursor.style.width="300px";
cursor.style.height="250px";
cursor.style.borderRadius="0";
cursor.style.backgroundImage=`url(${att})`;

})
elem.addEventListener("mouseleave",function(){
  cursor.style.backgrxundColor=`transparent`;
  cursor.style.width="20px";
  cursor.style.height="20px";
  cursor.style.borderRadius="50%";
  cursor.style.backgroundImage=`none`;
  
})
})