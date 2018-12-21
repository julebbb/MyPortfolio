$(document).ready(function () {
    var kima = $(".logo");
    var circle = $(".logoDiv div");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    console.log(windowWidth);
    console.log(windowHeight);
    

    //Move position background when move are in there


        if (windowWidth >= 992) {

            $(".logoDiv").hover(function () {
                $(".logoDiv").mousemove(function (event) {
                    var resultXK = event.pageX / 30;
                    var resultYK = event.pageY / 30;
                    var resultX = event.pageX / 70;
                    var resultY = event.pageY / 70;
                    kima.css("transform", "translate(" + -resultXK + "px," + -resultYK + "px)");
                    circle.css("transform", "translate(" + -resultX + "px," + -resultY + "px)");
                });

            });
        }
        
            $(".logoDiv").on('touchmove', function (event) {
                var resultXK = event.pageX / 30;
                var resultYK = event.pageY / 30;
                var resultX = event.pageX / 70;
                var resultY = event.pageY / 70;
                kima.css("transform", "translate(" + -resultXK + "px," + -resultYK + "px)");
                circle.css("transform", "translate(" + -resultX + "px," + -resultY + "px)");
                console.log('miaou');
                
            });
            

        $(".logoDiv").mouseleave(function () {
                    kima.css("transform", "translate(0px, 0px)");
                    circle.css("transform", "translate(0px, 0px)");
                    
                });

        if (windowHeight >= 500) {
            $('header').css('overflow', 'hidden');
        }

        // $('a').on('click', function() {
        //     $('body').css('opacity', '0');
        //     $('body').css('transition', '2s all');
        //     alert("miau");

        // })
        
});

// $('#main').onepage_scroll({
//     afterMove: function (index) {
//         //do your fadeIn here.
//         $('section').eq(index).children().fadeIn();
//     }
// });