// This code updates the position of the custom cursor and a blur effect based on the mouse's position.
var crsr = document.getElementById("cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) { // 'dets' captures the mouse position on the x and y axes
  crsr.style.left = dets.x + "px"; // Moves the custom cursor to the mouse's x-coordinate
  crsr.style.top = dets.y + "px"; // Moves the custom cursor to the mouse's y-coordinate
  blur.style.left = dets.x - 250 + "px"; // Moves the blur effect to 250 pixels left of the mouse's x-coordinate
  blur.style.top = dets.y - 250 + "px"; // Moves the blur effect to 250 pixels above the mouse's y-coordinate
});


// This code adds hover effects to all <h4> elements inside the #nav element.
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () { // When the mouse enters the <h4> element
    crsr.style.scale = 3; // Increase the size of the circle (cursor) to 3 times its original size
    crsr.style.border = "1px solid #fff"; // Change the circle's border to a 1px solid white
    crsr.style.backgroundColor = "transparent"; // Make the circle's background transparent
  });
  elem.addEventListener("mouseleave", function () { // When the mouse leaves the <h4> element
    crsr.style.scale = 1; // Reset the circle's size to its original scale
    crsr.style.border = "0px solid #95C11E"; // Remove the border or reset it to 0px with the original color
    crsr.style.backgroundColor = "#95C11E"; // Change the circle's background back to its original color
  });
});

gsap.to("#nav", {
  backgroundColor: "#000", // Changes the background color of the navbar to black
  duration: 0.5, // The animation lasts for 0.5 seconds
  height: "110px", // The navbar's height will animate to 110 pixels
  scrollTrigger: { 
    trigger: "#nav",  // The animation is triggered when the #nav element comes into view
    scroller: "body", // The scroll container is set to the body element
    // markers:true, // This line is commented out; if enabled, it would show markers to visualize the start and end points of the trigger
    start: "top -10%", // The animation starts when the top of the body is 10% above the viewport
    end: "top -11%", // The animation ends when the top of the body is 11% above the viewport
    scrub: 1, // The animation is linked to the scroll position, creating a smooth effect over 1 second
  },
});


gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main", // Trigger main element ko kar rahe ho
    scroller: "body", // Scroll body me kar raha hu
    // markers: true,
    start: "top -25%",  // top ka 25% screen scroll karte he backgound colour black hona start hoga
    end: "top -70%",  // top ka 70% screen scroll karte he backgound complete black ho jayega
    scrub: 2, // 2 second lagega backgroundColor ko black hone me
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90, // The elements will start 90 pixels below their final position.
  opacity: 0, // The elements will start fully transparent.
  duration: 1, // The animation duration is 1 second.
  scrollTrigger: {
    trigger: "#about-us", // The animation will be triggered when the #about-us section enters the viewport.
    scroller: "body", //The entire body of the document is used for scrolling.
    // markers:true,
    start: "top 70%", // The animation starts when the top of the #about-us section reaches 70% of the viewport height.
    end: "top 95%", //  The animation ends when the top of the #about-us section reaches 95% of the viewport height.
    scrub: 1, // The value 1 makes the animation follow the scroll smoothly.
  },
});

gsap.from(".card", {
  scale: 0.8, //The cards will start at 80% of their original size and scale up to 100%.
  // opacity:0,
  duration: 1, // The animation will last for 1 second.
  stagger: 0.1, // Each card will start its animation 0.1 seconds after the previous one, creating a staggered effect.
  scrollTrigger: {
    trigger: ".card", // The animation will be triggered when the .card elements enter the viewport.
    scroller: "body", //  The entire page (body) is being scrolled, which will trigger the animations.
    // markers:false,
    start: "top 70%", // The animation starts when the top of the .card element reaches 70% from the top of the viewport.
    end: "top 65%", // The animation ends when the top of the .card element reaches 65% from the top of the viewport.
    scrub: 1, // The animation progress is tied to the scroll position, with a 1-second delay
  },
});

gsap.from("#colon1", {
  y: -100, // The element starts 100 pixels above its original position
  x: -100, // The element starts 100 pixels to the left of its original position
  scrollTrigger: {
    trigger: "#colon1", // The animation is triggered when the "#colon1" element enters the viewport
    scroller: "body", // The scrolling element is the entire page (body)
    // markers: true, // (Optional) Uncomment and set to true to show markers for debugging
    start: "top 55%", // The animation starts when the top of "#colon1" reaches 55% from the top of the viewport
    end: "top 85%", // The animation ends when the top of "#colon1" reaches 85% from the top of the viewport
    scrub: 4, // The animation progress is tied to the scroll position, with a 4-second delay
  },
});

gsap.from("#colon2", {
  y: 100, // The element starts 100 pixels below its original position
  x: 100, // The element starts 100 pixels to the right of its original position
  scrollTrigger: {
    trigger: "#colon1", // The animation is triggered when the element with the ID #colon1 comes into view
    scroller: "body", // The scroll container is set to the body element
    // markers:true, // This line is commented out; if enabled, it would show markers to help visualize the start and end points of the trigger
    start: "top 55%", // The animation starts when the top of the #colon1 element reaches 55% of the viewport height
    end: "top 85%", // The animation ends when the top of the #colon1 element reaches 85% of the viewport height
    scrub: 4, // This creates a smooth scrolling effect, where the animation is linked to the scroll position over 4 seconds
  },
});

gsap.from("#page4 h1", {
  y: 50, // The element starts 50 pixels below its original position
  scrollTrigger: {
    trigger: "#page4 h1", // The animation is triggered when this element comes into view
    scroller: "body", // The scroll container is set to the body element
    // markers:true, // This line is commented out; if enabled, it would show markers to help visualize the start and end points of the trigger
    start: "top 75%", // The animation starts when the top of the element reaches 75% of the viewport height
    end: "top 70%", // The animation ends when the top of the element reaches 70% of the viewport height
    scrub: 3, // This creates a smooth scrolling effect, where the animation is linked to the scroll position over 3 seconds
  },
});


 