var zoom = detectZoom.zoom(); //Current zoom level
var device = detectZoom.device();//Current Device Pixel Aspect Ratio
var windowHeight = document.documentElement.clientHeight; //viewport height in px
var documentHeight = document.body.offsetHeight;
var inequality = 0; //difference
var element = document.getElementById("animpath");
var pathLength = element.getTotalLength();
var k=0.7; //considering bending of curve
var crutch4scrolling = 1; //was need for main curve correctly draw according  scroll . Precition var device insted it


(function($){
jQuery( document ).ready( function( $ ) {
    // Set the background-attachment for body to "fixed" so that
    // we can control it's scroll speed. You may have set this already
    // via the theme's 'customize' screen in WordPress. Just in case
    // it wasn't set correctly, we override it right here:
    $('body').css('background-attachment', 'fixed');

    // Attach a function to watch the window.scroll event, and
    // move the background image slower than the content scroll.
    $(window).scroll(function () {
        document.body.style.backgroundPosition = "50% " + (0 - (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 4)) + "px";
    });
});

function detectmob() {
 if ( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}


    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) ;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}



    // Detect browser and for Chrome and Safari scroll to do more smooth
    if (detectmob()) {console.log('Mobile detected!');}
     else
       if (is_firefox) {console.log('Firefox detected!');} // crutch4scrolling=1;
          else
            if (is_explorer) {console.log('MSIE detected!');}
              else {
                      if (is_safari) {console.log('Safari detected!');}
                      if (is_chrome) {console.log('Chrome detected!');}
                           // for smooth scroll - need jquery.mousewheel.min.js
                            $(document).bind( 'mousewheel', function (e) {
                            var nt = $(document.body).scrollTop()-(e.originalEvent.wheelDeltaY)*2.5 ;
                             e.preventDefault();
                                e.stopPropagation();
                            $(document.body).stop().animate( {
                            scrollTop : nt
                                 } , 1200, 'easeOutCubic');//, ''linear
                            } );
                            console.log('Smooth scroll.')
                       }
})(jQuery); // end of jQuery name space


var s = Snap("#curves");
var flag0=true;
var flag1=true;
var flag2=true;
var flag3=true;
var flag4=true;
var flag5=true;
var flag6=true;
var flag7=true;
var flag8=true;
 var groupfoto;

// CSS3
var svgString0 = '<path class="fil1 str1" d="m 136.25936,365.51678 0,83.72417 206.93696,-0.48962 0,-20.07421 L 151,429 151.00157,414.72304 167,415 l 0,14 99.67194,-0.45577 L 266.4469,415 171.20387,414.96785 171,429 l 116.77654,-0.56769 -0.27301,-13.95399 -14.74221,0 L 273,428 l 15,0 -0.49647,-31.63749 -14.74221,-0.24481 0.27301,14.44363 L 288,411 287.50353,378.49161 150.72858,378.002 c 0,0 -0.36662,14.998 1.27142,14.998 1.63802,0 14,0 14,0 l 0.0168,-14.7532 L 186,378 l 0,15 -14,0 0,-14 34,0 0,14 -14,0 -0.32083,-13.77403 L 227,379 l 0,14 -15,0 0.15446,-14.26357 L 247,379 l 0,14 -14,0 0,-14 34.84725,-0.50839 L 268,393 253,393 252.83203,378.98124 273,379 273.30733,392.20081 287,392 287.77654,378.73643 150.45557,377.75719 151,411 l 116.30125,-0.43867 0,-13.46438 -15.28822,0 L 252,411 l -19,-1 0,-13 14,0 0.099,13.07171 L 212,410 l 0,-13 15,0 0,13 -35,0 -0.0478,-12.90305 L 206,397 206,410 172.02288,409.58208 172,397 185.94608,396.85214 186,410 l -20,0 0,-13 -15,0 0,-19 136,1 0.50353,50.16675 55.4198,-0.73444 -0.54601,-63.40516 -203.38792,0.24481 75.34909,-0.48962 c 3.11024,-4.27475 -4.51129,-13.06051 9.55514,-12.72994 0,0 39.32677,0.29118 40.40457,0 6.94987,-1.87736 7.32857,-13.56599 -0.54601,-13.954 l -72.44494,-0.48962 c -10.32655,-0.17413 -11.66965,-24.74452 0.0989,-24.97035 l 129.40385,-0.24481 c 8.22806,-0.11775 11.70682,1.14893 11.19316,-6.36502 l 0.27301,-13.46446 -105.65252,-0.73435 42.86162,0 1.7856,-5.95823 -49.17071,-1.26001 0.3861,-4.15456 51.15637,0.86559 0.19303,-1.29831 -3.47477,0.25964 0.38609,-2.16383 3.66782,0.17317 -0.28956,-3.89493 -51.92855,0 0.38608,-1.38477 3.18521,0.34616 0.0965,-1.99073 -3.47479,-0.25963 0,-3.46204 17.33812,-0.6655 -7.50761,-37.82274 5.59658,-0.48963 2.86654,4.52898 4.36806,-4.65133 3.27604,4.03934 3.54906,-3.91699 4.09506,4.1618 5.18707,-3.91699 2.86655,0.48963 -6.4156,38.06754 13.5137,1.10559 1.09201,-16.16118 c 9.32129,-9.76625 17.77846,-14.92497 19.92929,-32.0698 6.1327,-71.03381 -103.51305,-61.36144 -84.0852,8.32341 3.88026,12.73255 7.94709,15.55593 15.41502,27.27506 l 1.78422,10.97613"/>';
var svgString1 = '<path class="fil1 str30" d="m 630.32875,913.51071 26.04098,0.11489 c 8.58173,0.12725 8.91109,-2.42966 8.79002,-11.91248 l 0,-196.62662 c 0.8079,-8.36157 -0.95438,-14.667 -10.67402,-14.60655 l -108.98732,1.12358 c -13.75323,-0.32014 -12.18332,5.87388 -12.35939,11.7976 l -0.56179,198.31199 c -1.53593,14.67151 5.08761,12.44127 10.67402,12.35938 l 241.76261,-1.28812 c 14.12065,1.12109 14.11241,-5.31457 14.6124,-12.39931 l 0.92496,-234.62389 c -0.0283,-10.79942 -0.86424,-14.05655 -13.48297,-14.04476 l -169.66068,0 c -11.71349,-0.47045 -13.42773,2.9607 -13.21619,12.8871 l -0.54768,26.43822 12.0785,-0.2809 0.0702,-14.39587 c 0.002,-0.35904 169.02867,-0.49157 169.02867,-0.49157 l 1.68537,197.18841 -121.36789,-0.74337 -0.17454,30.60053 c -0.0669,5.12924 -0.359,11.31255 -9.07384,10.59174 l -58.00485,-0.0702 -0.14045,-6.67126 c -3.81211,-0.37125 -7.9896,-0.86855 -8.07574,-8.21618 0.0891,-6.86139 -0.0137,-10.63869 9.19932,-10.53357 7.81324,-6.5e-4 9.68233,1.37605 9.55044,7.65439 0.26493,7.63837 0.0996,11.05294 -9.26954,10.81446 -5.52091,-0.13826 -9.64231,-1.72051 -9.40999,-7.79484 -0.47158,-6.30704 1.19454,-10.88258 9.12909,-11.02513 l 0,-6.74149 -54.21276,0.56179 -0.2809,-160.67203 108.70643,0.28089 0.56179,160.39114 -99.12484,-0.46248 0.54475,-44.5489 39.17076,0.0682 -0.14045,34.83101 -39.60621,0 0.56179,-34.831 86.23481,-0.2809 0.14045,-13.34251 -40.02756,0 0,-0.2809 40.02755,0.42134 0.38727,-52.14719 -40.69572,-0.0993 0,52.10605 40.02756,0 1.82582,-91.99316 -87.0775,0.28089 0,32.30294 87.3584,0"/>';
var svgString3 = '<path class="fil1 str33" d="m 522.2179,2275.6493 c 0,0 29.36727,99.877 29.36727,97.699 0,-2.178 16.28285,-34.2258 16.28285,-34.2258 l 25.58732,27.6919 1.44561,-14.1611 13.67418,-1.3962 -25.58733,-27.6917 31.69339,-15.8684 -102.64007,-35.7815 -29.223,22.1817 -344.01776,0 c -28.76543,1.6315 -25.95836,-13.2351 -26.51189,-26.849 l 0,-281.2349 c 0.0654,-7.4221 5.05365,-11.9507 13.95673,-11.8235 l 322.26786,-1.6544 c 7.72445,2.9197 10.48231,8.4968 10.46754,15.5573 l 1.69399,288.1761 -337.09562,0.3138 c -7.60041,-2.1931 -8.17201,-6.4949 -8.4322,-10.8901 l 2.03536,-243.6255 336.12445,-0.6222 0.29076,-30.8033 c -1.2e-4,-8.8155 -4.1436,-11.7195 -8.72295,-14.0014 l -10.50644,0.1984 0.18427,30.1381 -212.97028,-1.3571 0,-18.921 212.76277,1.3201 0.32603,19.3274 c -173.69423,-2.6702 -216.74772,-2.2332 -303.58974,-1.4974 l -0.009,9.296 -0.0789,228.7755 137.09575,-0.3111 -1.45384,-162.1058 -133.46117,1.2446 134.04271,160.3946 -1.45383,-159.4613 -133.18601,160.2337 207.24677,0 -0.22638,-64.5392 -54.27892,0.061 c -9.55444,-0.4077 -10.66029,22.2181 1.02801,22.2212 l 53.30593,0.384 -0.46622,-38.886 68.94888,-0.1929 c 8.43087,0.3341 8.9079,-21.1183 -1.51143,-21.3683 -4.111,-0.099 -118.04346,0.3544 -118.04346,0.3544 l 0.0279,-15.0065 139.44001,-0.1558 0.78054,-10.4934 -143.7216,0.098 0.31513,-30.9683 79.87545,0.7284 0.20561,12.3207 -80.18477,-0.66 0.61682,-42.7831 -20.97141,0.064 -0.007,-11.0251 45.05475,-0.4186 0.19165,15.85 61.04982,0.2629 -0.62378,-12.9778 59.85807,0.2843"/>';
//SVG
var svgString2 = '<path class="fil22 str1" d=""/>';

//Portret
var path5 = s.path("m 263.85329,2799.4829 8.73814,-8.1189 15.55387,-8.7559 10.31099,-0.7959 33.03014,-3.3432 18.17533,7.9599 -0.17476,-2.2288 c 0,0 -6.29145,-5.4127 -6.64098,-6.368 -0.34952,-0.955 -8.91291,-5.5718 -8.91291,-5.5718 l -7.16526,-2.8657 c 0,0 -4.36905,-1.751 -5.94191,-2.0693 -1.57287,-0.3186 -17.12676,-0.9553 -17.12676,-0.9553 l -4.54382,1.592 -12.75767,4.776 -7.16526,6.2086 -8.21387,12.7357 -10.48575,12.2583 -2.44667,14.1685 -1.74762,21.1732 -3.84479,2.8657 2.44668,22.7651 -2.27191,2.2288 4.01955,4.2984 -0.69907,5.7311 -3.32048,2.3879 c 0,0 0.52428,2.5471 1.74762,2.7064 1.22334,0.1587 2.7962,4.7758 2.7962,4.7758 l 1.74762,3.3432 -1.74762,3.8209 2.79621,2.7063 -0.17475,3.9798 4.01952,0.6369 0.34953,5.8901 -3.49524,3.5026 5.0681,6.2085 3.49526,3.6617 5.24288,0.3183 2.44667,2.5472 4.36909,-0.9552 1.57286,1.4328 7.68955,-0.3183 5.94194,2.547 c 0,0 1.57284,-0.796 2.44666,-0.1588 0.87382,0.6367 9.43717,2.7063 9.43717,2.7063 l 2.97098,-0.3184 c 0,0 3.3205,1.9103 4.19432,1.1144 0.8738,-0.796 2.27191,-2.3881 3.14572,-2.2289 0.8738,0.1588 5.24287,1.7512 5.24287,1.7512 0,0 5.41765,1.1145 6.11669,1.1145 0.69905,0 3.84478,-1.9104 3.84478,-1.9104 0,0 3.3205,1.2736 4.01955,1.2736 0.69904,0 4.1943,-3.0247 4.1943,-3.0247 0,0 1.22334,-2.7064 2.62143,-2.7064 1.39811,0 4.36907,-2.2288 4.36907,-2.2288 l -0.34952,-1.1143 c 0,0 2.44668,-0.6369 3.84477,-0.9553 1.3981,-0.3183 2.44669,-3.6615 3.14573,-4.2983 0.69905,-0.6369 2.97098,-1.592 2.97098,-1.592 0,0 3.49523,-3.9798 3.84476,-4.7758 0.34952,-0.7961 3.3205,-4.6167 4.36907,-5.2536 1.04859,-0.6367 1.39809,-3.3432 1.39809,-4.1391 0,-0.796 0.87384,-2.8656 0.87384,-4.1391 0,-1.2736 -0.34954,-3.0248 -0.34954,-3.0248 l 2.44668,-2.5472 0.69904,-4.9351 0.69905,-6.527 0.87384,-5.2536 -1.39813,-9.2335 2.97097,-1.1145 c 0,0 3.3205,-14.3276 3.49526,-14.9643 0.17475,-0.6369 -0.87382,-8.2782 -0.87382,-8.2782 l -1.92239,-4.1393 -3.14573,0.1587 -1.22332,2.0696 c 0,0 -1.22334,0.4776 -1.22334,-0.1588 0,-0.6368 -0.17477,-5.4125 -0.17477,-5.4125 l -2.44667,-3.3433 0,-4.776 -0.52429,-6.8454 -3.14573,-7.8006 -4.01953,-9.8703 -2.97098,-2.2287 -7.33021,-10.7298").attr({ fill: 'none', opacity: '0.0'});
var path6 = s.path("m 309.29157,2797.0155 0.5243,-5.8903 7.60218,-0.2389 16.07815,5.2537 5.6798,1.0347 7.95169,5.4923 0.34952,2.1491 c -4.15153,-1.1986 -8.01775,-1.6607 -11.1848,-0.3184 -0.58171,0.7866 0.36367,1.9526 1.57286,3.1841 l -1.31071,1.1143 5.41763,3.1043 c -2.59634,-0.5231 -5.24383,-1.4656 -7.68579,-0.7233 17.78745,7.2604 9.35056,4.803 14.02585,7.2045 l -18.9689,2.0262 c -6.35237,-0.9577 -9.52595,-3.8458 -12.48115,-6.8666 l -3.46013,-6.0226 -0.12359,-6.4727 z").attr({ fill: '#8C816D', opacity: '0.0'});
var path7 = s.path("m 257.5458,2828.2877 2.4715,-5.6285 4.94303,-1.5759 1.0775,1.8018 5.1555,0.2388 3.05835,1.5919 10.66051,-1.4328 9.61196,-4.2187 7.8643,-17.2728 0.26216,-3.7413 2.44668,-0.9552 c 0.48774,-1.4877 0.18215,-3.1819 -0.9612,-5.0943 l -2.53407,1.5921 -5.33026,-3.6615 -10.57314,1.751 -5.67978,5.1739 -7.77694,3.1043 -6.0293,4.6965 0.43689,-6.6068 -5.67978,5.8106 c -2.39891,8.7153 -3.352,16.7717 -3.42391,24.4269 z").attr({ fill: '#8C816D', opacity: '0.0'});
var path8 = s.path("m 319.9521,2838.4068 -0.24765,-3.2523 -2.34795,-3.377 -7.1674,-2.8707 -5.0666,-2.7017 -7.04385,-0.2815 -9.45353,8.4428 -0.12359,4.5028 0.9886,2.8707 -2.83032,4.2288 -5.85455,3.5023 -3.84478,4.3779 -2.88359,5.3332 9.43719,0.4776 2.44668,3.7412 4.80596,-0.3185 9.00028,-1.6715 4.28168,0.1587 0.69907,1.9103 2.44666,-1.1141 4.01955,-0.079 7.95169,-4.4575 3.49527,0.079 -0.26215,-2.5472 -4.7186,-2.7062 -12.67028,0.7162 -6.72837,0.9552 -2.18453,-2.2288 4.98074,-1.8306 14.76744,-1.4328 2.88357,-0.7164 -18.08794,-1.5124 -7.86431,2.6267 -4.45645,2.7064 -2.44667,-0.3185 0.78644,-2.2286 1.66023,-0.2389 1.22334,-1.4328 0.26216,-4.6963 2.97095,0.079 2.97098,-1.9898 2.00976,-0.079 2.97097,-2.5474 2.62144,-0.6367 4.63121,-0.2388 c 0,0 4.98073,-0.079 5.41764,0 0.43691,0.079 6.55359,0.796 6.55359,0.796 z").attr({ fill: '#8C816D', opacity: '0.0'});
var path9 = s.path("m 255.32142,2840.2202 3.08939,7.9924 1.11217,5.2906 7.16742,5.291 3.5837,2.026 0,2.4766 2.10078,1.9137 3.0894,-4.8406 6.79667,-0.3376 2.22437,3.3772 -2.47152,3.1518 -0.74145,3.3772 3.83085,1.4634 3.46012,0.1128 -1.60647,2.9269 7.04382,-0.4502 3.46013,-2.9269 3.21295,2.3641 4.07802,-0.3378 -0.24717,-4.2777 c 0,0 1.11218,-1.2384 2.1008,-1.2384 0.9886,0 4.078,0.338 4.078,0.338 l 2.96582,2.9265 0,4.728 c 0,0 3.70728,2.364 5.06661,1.9137 1.35932,-0.4503 5.43734,-1.5759 5.43734,-1.5759 l 3.95443,-0.5628 c 0,0 4.69587,2.2514 5.43733,2.1387 0.74147,-0.1129 7.78529,0.1129 8.52674,0.1129 0.74145,0 4.81945,0.2252 5.93163,0.2252 1.11218,0 3.33655,-0.4503 3.95444,-0.4503 0.61788,0 5.80806,2.7017 5.80806,2.7017 l 5.93164,3.3772 c 0,0 3.46013,-0.4503 3.70728,-1.0133 0.24715,-0.5628 2.34795,-2.4766 2.34795,-2.4766 0,0 1.11217,-4.6153 0.9886,-5.4032 -0.12377,-0.7878 -0.24715,-8.5553 -0.24715,-8.5553 l 0.24715,-1.3508 1.4829,-0.2251 1.23575,10.3563 -1.9772,11.0319 -0.86503,3.4895 -2.47152,4.0527 0.74145,3.0393 -2.10078,7.0919 -4.07801,3.9398 -3.33654,5.2909 -4.81945,4.2777 c 0,0 -2.34795,2.7015 -2.84226,2.9267 -0.49431,0.2251 -12.60473,8.6679 -12.60473,8.6679 l -36.08415,-1.1258 -25.5802,-5.8537 c 0,0 -12.11044,-4.8403 -12.23402,-5.5158 -0.12359,-0.6755 -2.34795,-10.8067 -2.34795,-10.8067 l -1.23575,-8.4428 -6.17878,-15.7598 -1.11219,-14.4088 -1.48291,-18.0111 0.86503,-6.9793 z").attr({ fill: '#8C816D', opacity: '0.0'});
var path10 = s.path("m 356.7772,2798.0065 4.69587,12.1575 -0.24715,4.8406 4.44875,8.3301 c 0,0 0.24713,6.8667 0.24713,7.7672 0,0.9006 1.48292,7.2045 1.48292,7.2045 l 0.86503,2.9267 c 0,0 0.37072,0.563 0.4943,1.0131 0.12376,0.4503 -0.12377,2.9269 -0.12377,2.9269 l 0.49432,2.7017 -0.12377,16.4353 0.37075,2.0262 -0.37075,3.6022 -1.35933,2.4764 0.24716,2.1389 c 0,0 0.86502,2.9269 0.86502,3.3772 0,0.4503 0.24715,2.2514 0.24715,2.2514 l 1.6065,-3.7149 -0.24715,-5.6285 0.12376,-5.9661 1.23574,-1.5761 2.71867,-0.225 c 0,0 0.24715,-1.0131 -0.37072,-1.3509 -0.61788,-0.3377 -2.1008,-1.351 -2.1008,-1.351 0,0 -0.61788,-0.6753 -0.61788,-1.6884 0,-1.0131 -0.61787,-2.1387 -0.12359,-2.3639 0.4943,-0.2251 1.35933,-0.4503 1.85365,-0.4503 0.49428,0 0.74143,0 1.23575,-0.1129 0.49428,-0.1128 0.86503,0.3376 0.86503,-0.6755 0,-1.0131 -0.37075,-2.1387 -0.24717,-2.8142 0.12377,-0.6753 0.12377,-2.5891 0.12377,-2.5891 0,0 -1.11218,-1.2383 -1.97723,-1.801 -0.86502,-0.563 -2.71865,-2.0263 -2.71865,-2.0263 l 0.61787,-2.4766 0.74146,-2.2514 c 0,0 1.11219,-0.5628 1.60649,0 0.4943,0.5629 1.48291,2.5891 1.48291,2.5891 l 2.71867,3.4897 c 0,0 0.74145,1.0131 0.86502,0.1129 0.12377,-0.9006 0.24716,-0.9006 0,-1.9136 -0.24715,-1.0131 -0.4943,-2.4767 -0.4943,-3.377 0,-0.9006 -0.4943,-2.7019 -0.61787,-3.2647 -0.12377,-0.5628 0,-1.0131 -0.74145,-1.6886 -0.74147,-0.6753 -1.73007,-1.5759 -1.73007,-1.5759 l -1.73008,0.2251 -0.9886,0.788 -0.86502,1.4634 -0.98861,-0.2251 c 0,0 0,-1.8011 0,-2.4766 0,-0.6753 -1.11217,-3.7148 -1.11217,-3.7148 l -1.85365,-3.1519 -0.24715,-11.3695 -7.04383,-17.4482 z").attr({ fill: 'none', opacity: '0.0'});
var path11 = s.path("").attr({ fill: 'none', opacity: '0.0'});
var path12 = s.path("").attr({ fill: 'none', opacity: '0.0'});
var path13 = s.path("").attr({ fill: 'none', opacity: '0.0'});
var path14 = s.path("").attr({ fill: 'none', opacity: '0.0'});
var path15 = s.path("").attr({ fill: 'none', opacity: '0.0'});
var path16 = s.path("").attr({ fill: 'none', opacity: '0.0'});
groupfoto = s.group(path5, path6, path7, path8, path9, path10, path11, path12, path13, path14,  path15, path16);
// GRFed
  var svgString4 = '<path class="fil1 str6" d="m 424.60107,2766.7932 -6.19371,3.4115 -1.39113,4.8025 3.41143,6.1938 14.40773,4.1734 5.34965,-0.4976 3.62634,-12.519 -9.60515,-2.7823 -1.39114,4.8026 4.80258,1.3912 2.78227,-9.6053 4.80258,1.3912 -24.01287,-6.9556 2.31335,-7.9864 6.19372,-3.4114 4.80257,1.3911 3.41145,6.1937 -0.92222,3.1838 5.72479,-1.7926 4.80258,1.3912 1.39114,-4.8027 -24.01289,-6.9557 4.17343,-14.4076 -4.17343,14.4076 9.60515,2.7823 2.78228,-9.6052 -2.78228,9.6052 14.40774,4.1734 4.17341,-14.4077 -14.40773,-4.1735 2.78228,-9.605 -2.78228,9.605 4.80257,1.3912 1.39116,-4.8026 -1.39116,4.8026 4.80258,1.3911 5.56456,-19.2102 -4.80257,-1.3912 -1.39115,4.8026 4.80259,1.3912 1.39113,-4.8026 -19.2103,-5.5646"/>';

  //monograms
  var svgString5 = '<path id="monogram1" class="fil1 str6" d=""/>';
  var svgString6 = '<path id="monogram2" class="fil1 str6" d=""/>';
  var svgString7 = '<path id="monogram3" class="fil1 str0" d=""/>';



// ********************************************************************************************

    function infoAboutObj(elem) {
      coords = elem.getBoundingClientRect();
      console.log('coords.top='+coords.top+';  coords.bottom='+coords.bottom);
    }

var coords;
var DX=0, KX=0;
function showVisible() {
        infoAboutObj(document.getElementById("animpath"));
        device = detectZoom.device(); //redetect  Pixel Aspect Ratio
        var scrolled = window.pageYOffset || document.documentElement.scrollTop; console.log('scrolled='+scrolled);

       var vartop=parseFloat(Math.abs(coords.top),10);//console.log(' vartop='+vartop);
       var varbottom=parseInt(Math.abs(coords.bottom),10);//console.log(' varbottom='+varbottom);

        //DX - размер в px учитывающий сдвиг начала #animpath относительно начала страници и уменьшающийся по мере приближения к концу  #animpath
        //KX - эмпирический к-т учитывающий неравномерность #animpath

        KX=pathLength/Math.abs(coords.bottom-coords.top);console.log(' KX='+KX);

        //PK поправочное слогаемое - усиливающий coords.top в начале и coords.bottom в конце h*(t*b)/((b-t)*(b-t))

        var varpow=Math.pow(coords.top-coords.bottom,2); //console.log(' varpow='+varpow);
        PK=Height_of_mainsvg*vartop*varbottom/varpow;  console.log(' PK='+PK);


        inequality = KX*(coords.bottom)-PK-windowHeight*0.5;

       element.style.strokeDashoffset = inequality; //- It is work!
       console.log("strokeDashoffset="+element.style.strokeDashoffset);

         	 if ((inequality < 3900) && flag0) {flag0=false;   // Draw CSS3
			   var path3 = s.polyline("").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing0.initDraw();
         	   myDrawing0.callOnFinished = function() {path3.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

         	 if ((inequality < 3000) && flag1) {flag1=false;   // Draw JS
			   var path4 = s.polyline("").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing1.initDraw();
         	   myDrawing1.callOnFinished = function() {path4.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

			 if ((inequality < 2100) && flag2) {flag2=false; myDrawing2.initDraw(); return;}// Draw SVG


			 if ((inequality < 1010) && flag3) {flag3=false;   // Draw HTML5
			   var path5 = s.polyline("").attr({ stroke: '#CFCDC6', strokeWidth: '4', fill: 'none', opacity: '0.0'});
         	   myDrawing3.initDraw();
         	   myDrawing3.callOnFinished = function() {path5.animate({ opacity: '1' },1200, mina.linear) };
         	   return;}

			 if ((inequality < 110) && flag4) {flag4=false;   // Draw FOTO
				console.log("Foto?");
					for (var ii = 12 - 1; ii >= 0; ii--) {
							console.log(' '+ii);
							  groupfoto[ii].animate({ opacity: '1'},4000, mina.easeinout);
					 };
         	   return;}

			 if ((inequality < 10) && flag5) {flag5=false; myDrawing4.initDraw(); return;}// Draw Zababurin

       if ((scrolled>2000) && flag6) {flag6=false; console.log('scrolled='+scrolled); myDrawing5.initDraw(); }

       if ((inequality < 4200) && flag7) {flag7=false; console.log('Draw 1 , scrolled='+scrolled); myDrawing6.initDraw(); }

       if ((scrolled>2600) && flag8) {flag8=false; console.log('scrolled='+scrolled); myDrawing7.initDraw(); }

    }

          element.style.strokeDasharray = pathLength;
          element.style.strokeDashoffset = pathLength;
          console.log("pathLength="+pathLength);

 /*** Check element Is it visible    */
    function isVisible(elem) {
      var coords = elem.getBoundingClientRect();
      var topVisible = coords.top > 0 && coords.top < shift;
      var bottomVisible = coords.bottom < shift && coords.bottom > 0;
      return topVisible || bottomVisible;
    }


function Drawing( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = s.g().transform( transformString ).drag();
    this.timeBetweenDraws = timeBetweenDraws;
};

Drawing.prototype.init = function( svgString, transformString ) {
      this.group.clear();
      this.currentPathIndex = 0;

};

Drawing.prototype.endReached = function() {
    if( this.currentPathIndex >= this.pathArray.length ) {
        return true;
    };
};

Drawing.prototype.callOnFinished = function() {
}

Drawing.prototype.initDraw = function() {
    this.init();
    this.draw();
};

Drawing.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            this.callOnFinished();
            return
        };
    };
    var myPath = this.pathArray[ this.currentPathIndex ] ;

    this.leng = myPath.getTotalLength();

    this.group.append( myPath );

     myPath.attr({
       fill: 'none',
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });

     this.currentPathIndex++;
     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );
};

var myDrawing0 = new Drawing( svgString0, '', 5000 );
var myDrawing1 = new Drawing( svgString1, '', 6000 );
var myDrawing2 = new Drawing( svgString2, '', 3000 );
var myDrawing3 = new Drawing( svgString3, '', 7000 );
var myDrawing4 = new Drawing( svgString4, '', 4000 );
var myDrawing5 = new Drawing( svgString5, '', 5000 );
var myDrawing6 = new Drawing( svgString6, '', 5000 );
var myDrawing7 = new Drawing( svgString7, '', 5550 );

// var mainsvg = document.getElementById("curves");
var mainsvg = document.getElementsByTagName('svg')[1]; // eqv document.getElementById("curves")
var Height_of_mainsvg = mainsvg.clientHeight || (mainsvg.parentNode.clientHeight-672); //FF include padding, so we should substr it?

window.onload = function () {
  window.scrollTo(0, 0);
  console.log('-=start=-');
  console.log('Height of mainsvg: '+Height_of_mainsvg);
  console.log('Height of screen: '+windowHeight);
  console.log('Current zoom level: '+zoom+'    Device Pixel Aspect Ratio:'+device);
 }
window.onscroll = showVisible;