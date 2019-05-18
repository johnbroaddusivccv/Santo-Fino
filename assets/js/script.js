// NAV ===============================================
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}


// OWL ===============================================
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700:{
            items: 4
        },
        1000:{
            items:1
        }
    }
})