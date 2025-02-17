const swiper = new Swiper(".heroSlider", {
    spaceBetween: 30,
    slidesPreView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    effect: "fade",
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    
})