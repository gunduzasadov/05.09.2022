var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
   
 
});

ScrollReveal().reveal('.ani1',{delay:250});
ScrollReveal().reveal('.ani2',{delay:500});
ScrollReveal().reveal('.ani3',{delay:750});
ScrollReveal().reveal('.ani4',{delay:1000});
ScrollReveal().reveal('.ani5',{delay:1250});
ScrollReveal().reveal('.ani6',{delay:1500});
ScrollReveal().reveal('.ani7',{delay:1750});
ScrollReveal().reveal('.ani8',{delay:2000});


window.sr=ScrollReveal();
sr.reveal(".anime-left",{
  origin:"left",
  duraction:1000,
  distance:'25rem',
  delay:300
})


  //initialize swiper when document ready
