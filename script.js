function homePageAnimation() {
    gsap.set(".slidesm", { scale: 5 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(
      ".vidDiv",
      {
        "--clip": "0%",
        ease: Power2,
      },
      "Deepu"
    ).to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "Deepu"
    );


}
function realAnimation() {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: -200,
      ease: Power4,
    });
    
}
function teamAnimation() {
    document.querySelectorAll(".list-elem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
        var animVal = gsap.utils.mapRange(
          0,
          window.innerWidth,
          -200,
          200,
          dets.clientX
        );
        gsap.to(this.querySelector(".picture"), {
          opacity: 1,
          ease: Power4,
          duration: 0.5,
          x: animVal,
        });
      });
        
      el.addEventListener("mouseleave", function (dets) {
        gsap.to(this.querySelector(".picture"), { opacity: 0 });
      });
    });
}
function paraAnimation() {
   var clutter = "";
   document
     .querySelector(".textpara")
     .textContent.split("")
     .forEach((e) => {
       if (e === "") clutter += `<span>&nbsb;</span>`;
       clutter += `<span>${e}</span>`;
     });
   document.querySelector(".textpara").innerHTML = clutter;
   gsap.set(".textpara span", { opacity: 0.1 });
   gsap.to(".textpara span", {
     scrollTrigger: {
       trigger: ".para",
       start: "top 60%",
       end: "bottom 90%",
       scrub: 1,
     },
     opacity: 1,
     stagger: 0.09,
     ease: Power4,
   }); 
}
function smoothScroll() {
    (function () {
      const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsuleAnimation() {
    gsap.to('.capsule:nth-child(2)', {
        scrollTrigger: {
            trigger: '.capsules',
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4,
    })
}
function colorAnimation() {
    document.querySelectorAll(".section").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: () => {
          document.body.setAttribute("theme", e.dataset.color);
        },
      });
    });
}

homePageAnimation();
realAnimation();
teamAnimation();
paraAnimation();
smoothScroll();
capsuleAnimation();
colorAnimation();