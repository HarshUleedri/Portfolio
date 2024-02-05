$('.cards').tilt({
  glare: true,
  maxGlare: .3,
  scale: 1.1
})

function cursorEffect(a, b) {
  var cursor = document.querySelector(a)
  var mainDoc = document.querySelector(b)

  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y

    })

  })
  document.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      opacity: 1,
      sacle: 1,

    })

  })
  document.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      opacity: 0,
      sacle: 0

    })

  })
  // document.addEventListener("click", function (dets) {
  //   gsap.to(cursor, {
  //     display: "none",

  //   })

  // })
}
cursorEffect(".cursor", "body");

function hoverimg(a, b) {
  var list = document.querySelector(a)
  var cursor1 = document.querySelector(b);

  list.addEventListener("mousemove", function (dets) {

    gsap.to(cursor1, {
      x: dets.x,
      y: dets.y,
    });
  });
  list.addEventListener("mouseenter", function (dets) {

    gsap.to(cursor1, {
      x: dets.x,
      y: dets.y,
      scale: 1,
      opacity: 1,
    });
  });
  list.addEventListener("mouseleave", function (dets) {

    gsap.to(cursor1, {
      x: dets.x,
      y: dets.y,
      scale: 0,
      opacity: 0
    });
  });

}
hoverimg(".project_list1", ".project_img")
hoverimg(".project_list2", ".project_img2")
hoverimg(".project_list3", ".project_img3")
hoverimg(".project_list4", ".project_img4")

function menu() {

  var menu = document.querySelector(".menu");
  var menuicon = document.querySelector(".menu_icon");
  var navicon = document.querySelector(".nav_icon i");

  menuicon.addEventListener("click", function () {
    menu.style.top = "-100%"

  })

  navicon.addEventListener("click", function () {
    menu.style.top = 0

  })

}
menu();

function circleText() {
  const text = document.querySelector('.text p');

  text.innerHTML = text.innerText.split("").map((char, i) => `<span style = "transform:rotate(${i * 17}deg)">${char}</span>`).join("")
}
circleText()
function loader() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%"
  }, 3800)
}
loader();


tl = gsap.timeline();

function animation() {
  let mm = gsap.matchMedia();

  mm.add({
    phone: "( max-width: 600px )",
    desk: "(min-width: 601px"
  }, (context) => {
    let { phone, desk } = context.conditions
    phone ? 1 : 0, desk ? 1 : 0
    if (phone == 1) {

      gsap.from(".circle_img i", {
        y: 8,
        duration: 1,
        yoyo: true,
        repeat: -1,
      })
      gsap.from(".text span", {
        rotation: "+=360",
        repeat: -1,
        duration: 5,
        ease: "none",
      })
      tl.from(".page1_content h1", {
        opacity: 0,
        y: 10,
        delay: 4,
      })
      tl.from(".nav i", {
        opacity: 0,
        duration: 1,
        y: 30,
        stagger: 0.5,
      })
      tl.from(".circle span", {
        opacity: 0,
        duration: 1,
        y: 10,
        stagger: 0.5,
      })
      gsap.from(".page2 h1, .page2 h2, .page2 h3, .page2 h4, .page2 p", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".page_container",
          // markers: true,
          start: "top, 40%",
          end: "60%, 50%",
          scrub: 2
        }
      })

      gsap.from(".page3 h1, .page3 .cards", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page3",
          scroller: ".page_container",
          // markers: true,
          start: "top, 40%",
          end: "60%, 50%",
          scrub: 2
        }
      })

      gsap.from(".page4 h1, .page4 .project_list1, .page4 .project_list2, .page4 .project_list3, .page4 .project_list4", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page4",
          scroller: ".page_container",
          // markers: true,
          start: "top, 40%",
          end: "60%, 50%",
          scrub: 2
        }
      })

      gsap.from(".page5 h1, .page5 .page5_icons", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page5",
          scroller: ".page_container",
          // markers: true,
          start: "top, 40%",
          end: "60%, 50%",
          scrub: 2,
        }
      })
    }
    else {

      gsap.from(".circle_img i", {
        y: 15,
        duration: 1,
        yoyo: true,
        repeat: -1,
      })
      gsap.from(".text span", {
        rotation: "+=360",
        repeat: -1,
        duration: 5,
        ease: "none",
      })
      tl.from(".page1_content h1", {
        opacity: 0,
        y: 10,
        delay: 4,
      })
      tl.from(".nav h2", {
        opacity: 0,
        duration: 1,
        y: 30,
        stagger: 0.5,
      })
      tl.from(".circle span", {
        opacity: 0,
        duration: 1,
        y: 10,
        stagger: 0.5,
      })
      gsap.from(".page2 h1, .page2 h2, .page2 h3, .page2 h4, .page2 p", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".page_container",
          // markers: true,
          start: "top, 40%",
          end: "50%, 50%",
          scrub: 1
        }
      })

      gsap.from(".page3 h1, .page3 .cards", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page3",
          scroller: ".page_container",
          // markers: true,
          start: "top, 30%",
          end: "40%, 50%",
          scrub: 1
        }
      })

      gsap.from(".page4 h1, .page4 .project_list1, .page4 .project_list2, .page4 .project_list3, .page4 .project_list4", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page4",
          scroller: ".page_container",
          // markers: true,
          start: "top, 80%",
          end: "40%, 40%",
          scrub: 1
        }
      })

      gsap.from(".page5 h1, .page5 .page5_icons", {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page5",
          scroller: ".page_container",
          // markers: true,
          start: "top, 20%",
          end: "50%, 50%",
          scrub: 1
        }
      })
    }

  })
}
animation();






