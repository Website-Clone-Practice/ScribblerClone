



gsap.to('img',{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,


    },
    duration:5,

})

gsap.to('#page3 h1',{
    transform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page3",
        scroll:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true,

    }
})