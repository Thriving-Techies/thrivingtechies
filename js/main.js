$(document).ready(function(){
    //------------------------------------------------------------------- Preloader Start

    $(window).on('load',function(){
        $('.preloader').addClass('complete');
    });

    //------------------------------------------------------------------- Hamburger Menu

    const menuBtn = document.querySelector('#openNav');
    const menuBody = document.querySelector('#mobileNav');
    const menuBg = document.querySelector('#menu-bg');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuBody.classList.add('open');
        menuBg.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuBody.classList.remove('open');
        menuBg.classList.remove('open');
        menuOpen = false;
    }
    });
    $("#mMBtn1,#mMBtn2,#mMBtn3,#mMBtn4,#mMBtn5,#mMBtn6,#mMBtn7").click(function() {
        $("#openNav").removeClass('open');
        $("#mobileNav").removeClass('open');
        $("#menu-bg").removeClass('open');
      });

    //------------------------------------------------------------------- Waypoint Start

    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
        $('nav').toggleClass("sticky");
        },
        offset: 30
    });

    //------------------------------------------------------------------- GumShoe Start

    var spy = new Gumshoe('#mainNav a,#mobileNav a');

});