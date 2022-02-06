$(document).ready(function(){

    setTimeout(function() {
        $("body").fadeIn(300);
    }, 300);

    $(".left-column").css("backgroundImage", "url('assets/images/Capri.jpeg')");

    setTimeout(function(){
        $(".js-box").fadeIn(500);
        $(".jquery-box").fadeIn(700);
        $(".java-box").fadeIn(900);
        $(".python-box").fadeIn(1100);
        $(".html-box").fadeIn(1300);
        $(".css-box").fadeIn(1500);
        $(".sass-box").fadeIn(1700);
        $(".git-box").fadeIn(1900);
        $(".bulma-box").fadeIn(2100);
    }, 200);

    $(".bg-options-bar").on({
        mouseenter: function () {
            $(this).css("color", "#886666");
        },
        mouseleave: function () {
            $(this).css("color", "white");
        }
    });

    $(".fa-eye").on({
        click: function() {
            $(".profile-container").fadeToggle(200);
        }
    });

    $(".fa-random").click(function(){
        var randomUrlImg = randomImg();
        $(".left-column").fadeOut(70).css("backgroundImage", randomUrlImg).fadeIn(100);
    })

});

function randomImg(){
    let arr =  ["url('assets/images/Amsterdam.jpeg')",
                "url('assets/images/Athens.jpeg')",
                "url('assets/images/Capri.jpeg')",
                "url('assets/images/Capri2.jpg')",
                "url('assets/images/Capri3.jpeg')",
                "url('assets/images/Central-Park.jpeg')",
                "url('assets/images/Christ-The-Redeemer.jpg')",
                "url('assets/images/dyrholaey.jpg')",
                "url('assets/images/Golden-Gate-Bridge.jpeg')",
                "url('assets/images/Golden-Gate-Bridge2.jpeg')",
                "url('assets/images/Hamnoy.jpeg')",
                "url('assets/images/Lauterbrunnen.jpeg')",
                "url('assets/images/Machu-Picchu.jpeg')",
                "url('assets/images/Osaka.jpg')", 
                "url('assets/images/Paris.jpeg')",
                "url('assets/images/Positano.jpeg')",
                "url('assets/images/Preikestolen.jpeg')",
                "url('assets/images/Provence.jpeg')",
                "url('assets/images/San-Marino.jpeg')",
                "url('assets/images/Santorini.jpeg')",
                "url('assets/images/South-Island.jpeg')", 
                "url('assets/images/Tohoku-Region.jpeg')",
                "url('assets/images/Trevi-Fountain.jpeg')", 
                "url('assets/images/Trolltunga.jpeg')"
            ];
    
    return arr[Math.floor(Math.random()*arr.length)];
}