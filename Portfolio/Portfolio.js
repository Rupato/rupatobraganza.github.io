window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})


function toggleMeu(){
    var menuToggle = document.querySelector('.toggle');
    var menuMain = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menuMain.classList.toggle('active');
}


$(document).ready(function(){
    $(document).on('click','.box', function(){
        var url = $(this).find('.hostedLink').text();
        window.open(url, '_blank');
    })
	// var s = skrollr.init({
    //     forceHeight: false,
    //     smoothScrolling: true,
    //     render: function(data) {
    //         //Log the current scroll position.
    //         console.log(data.curTop);
    //     }
    // });	
    $(window).on('resize', function () {
        // var win = $(this); //this = window
        // if (win.height() >= 991) {
        //     s = skrollr.init({
        //         forceHeight: false,
        //         smoothScrolling: true,
        //         render: function(data) {
        //             //Log the current scroll position.
        //             console.log(data.curTop);
        //         }
        //     });	
        // }else{
        //     //s = s.destroy();
        // }
    });
    $(document).on('click','.menu a',function (){
    
    var type = $(this).attr('type');
    $('html, body').animate({
        scrollTop: $("section[type="+type+"]").offset().top
    }, 1000);
    });
})