var swiper = new Swiper(".slide-content",{
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})