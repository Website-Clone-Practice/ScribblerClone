const navbar = document.getElementById('navbar')

window.addEventListener('scroll',()=>{
    if (window.scrollY > 50) { 
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Stronger shadow on scroll
        
      } else {
        navbar.style.backgroundColor = '#fede02';
        navbar.style.boxShadow = 'none';
      }
})

const gototop = document.getElementById('gototop')

gototop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
        
    })

})

gsap.from("nav",{
  y:-100,
  duration:0.9,
  delay:0.2
})


gsap.from("img",{
  x:100,
  scrub:5,
  duration:2
})

var  tl = gsap;
tl.from("#left #h1e",{
  x:-200,
  duration:1,
  
  
})
tl.from("#left .a1",{
  x:-200,
  duration:1
  
})
