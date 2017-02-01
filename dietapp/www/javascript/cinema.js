$(document).ready(function(){




window.onload=function()
{

$(".loading").fadeOut(2000,function(){

  $("body").css("overflow-y","auto");
});

}





$(window).scroll(function(){

console.log($(this).scrollTop());


if ($(this).scrollTop()>=400)
{
  $(".topbutton").show();
}

else

{
  $(".topbutton").hide();
}




})

$(".topbutton").click(function(){

$("html,body").animate({scrollTop:0},600);
})


$(".mkader").on("click",function(){

  $(".re").show();
    $(".treka").hide();
})


$(".t7der").on("click",function(){

  $(".treka").show();
  $(".re").hide();
  
})

});





var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7251676025279948~2665838710',
        interstitial: 'ca-app-pub-7251676025279948/4142571918'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);

    // $(".ser-link").on("click",function(e){
    //     e.preventDefault();
    //     var ser_id=$(this).attr("ser_id");
    //     alert(ser_id);
    //     window.location.href("ceaser.html");
    // });


//map

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


      var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7251676025279948~2665838710',
        interstitial: 'ca-app-pub-7251676025279948/4142571918'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

function initApp() {
    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

document.addEventListener('deviceready', initApp, false);

    // $(".ser-link").on("click",function(e){
    //     e.preventDefault();
    //     var ser_id=$(this).attr("ser_id");
    //     alert(ser_id);
    //     window.location.href("ceaser.html");
    // });

