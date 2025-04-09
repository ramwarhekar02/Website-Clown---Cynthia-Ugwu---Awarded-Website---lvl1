const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function circlechapta() {
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(details) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, details.clientY - yprev);

        xprev = details.clientX;
        yprev = details.clientY;

        mousefollower(xscale,yscale);

        timeout = setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
        },100);
    })
}

function firstpage() { 
    let tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: .2,
    })

    tl.from("#bottom", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function mousefollower(xscale,yscale) {
    window.addEventListener("mousemove", function(details) {
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale},${yscale})`;
    });
}

document.querySelectorAll("#ram1").forEach(function (ram1) {
    var rotate = 0;
    var diffrot = 0;

    ram1.addEventListener("mousemove", function(dets) {
        var diffy = dets.clientY - ram1.getBoundingClientRect().top;
        var diffx = dets.clientX - ram1.getBoundingClientRect().left;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(ram1.querySelector("img"), {
            opacity : 1,
            ease: Power3,
            top : diffy,
            left : diffx,
            rotate : gsap.utils.clamp(-20,20,diffrot),
        });
    });
    ram1.addEventListener("mouseleave", function(dets) {
        gsap.to(ram1.querySelector("img"), {
            opacity : 0,
            ease: Power1,
            top : "50%",
            left : "50%",
            transform: `translate(-50%, -50%)`,
        });
    });  
});

document.querySelectorAll("#ram2").forEach(function (ram2) {
    var rotate = 0;
    var diffrot = 0;

    ram2.addEventListener("mousemove", function(dets) {
        var diffy = dets.clientY - ram2.getBoundingClientRect().top;
        var diffx = dets.clientX - ram2.getBoundingClientRect().left;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(ram2.querySelector("img"), {
            opacity : 1,
            ease: Power3,
            top : diffy,
            left : diffx,
            rotate : gsap.utils.clamp(-20,20,diffrot),
        });
    });

    ram2.addEventListener("mouseleave", function(dets) {
        gsap.to(ram2.querySelector("img"), {
            opacity : 0,
            ease: Power1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
    });
});

document.querySelectorAll("#ram3").forEach(function (ram3) {
    var rotate = 0;
    var diffrot = 0;
    
    ram3.addEventListener("mousemove", function(dets) {
        var diffy = dets.clientY - ram3.getBoundingClientRect().top;
        var diffx = dets.clientX - ram3.getBoundingClientRect().left;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(ram3.querySelector("img"), {
            opacity : 1,
            ease: Power3,
            top : diffy,
            left : diffx,
            rotate : gsap.utils.clamp(-20,20,diffrot),
        });
    });
    ram3.addEventListener("mouseleave", function(dets) {
        gsap.to(ram3.querySelector("img"), {
            opacity : 0,
            ease: Power1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        });
    });
});

circlechapta();
mousefollower();
firstpage();

