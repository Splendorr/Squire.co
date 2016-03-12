// console.log 'hello there!'

console.log('priming');

// var gameBoxes = [
//   'wtw', // Slide 0
//   'gonehome', // Slide 1
//   // 'PointlessCheerfulBurro', // Slide 2
//   // 'SingleBoldAnemoneshrimp', // Slide 3
//   // 'WateryOblongCoelacanth', // Slide 4
//   // 'InconsequentialDifferentKite', // Slide 5
//   // 'DeficientImpureAnkole', // Slide 6
//   // 'HopefulBeautifulHen', // Slide 7
//   // 'TameCavernousIzuthrush', // Slide 8
//   // 'VapidSerpentineHippopotamus', // Slide 9
//   // 'NegligibleRecentAfghanhound', // Slide  10
//   // 'FragrantHeartyKawala', // Slide  11
// ];
// 

// var openedGameBoxWidth = "35.75%";
// var openedProjectDetailsWidth = "64.25%"



// var concealearOpened = false;

// var tlconcealer = new TimelineMax({paused:true}) 
//     .to($("#concealer"), 1, { height: "100%" }, "half")
//     // .to(window, 2, {scrollTo:{y:700}, ease:Power2.easeOut}, "half")
//     .to($("#concealer"), 1, { height: 0 }, "zero")
//     .to($("#concealer"), 1, { height: "100%" }, "halfAgain");

// $( ".logotriangle" ).click(function() {
//   if ( concealearOpened == true ) {
//     // tl2.tweenFromTo("full", "halfAgain");
//     tlconcealer.tweenFromTo("zero", "halfAgain");
//     concealearOpened = false;
//   }
//   else {
//     // tlconcealer2.tweenFromTo("half", "full");
//     tlconcealer.tweenFromTo("half", "zero");
//     concealearOpened = true;
//   };
//   console.log('set #concealer to ' + concealearOpened);
// });

var tlTriangleSpin = new TimelineMax({paused:true, delay: 0.5})
  .to($('.logotriangle'), 0.75, {rotationX: "+=180"});

function flipTriangle () {
  tlTriangleSpin.play();
}

function flipTriangleBack () {
  tlTriangleSpin.reverse();
}

$(".logotriangle").click(function(){
  // var $this = $(this),
  //     $content = $this.find(".content");
  if(!$(".expander").hasClass("closed")){
    // TweenLite.to($(".content"), 1, {height:0, paddingTop:0})
    TweenLite.to($(".content"), 1, {height:0});
    tlTriangleSpin.reverse();
    $(".expander").addClass("closed")
  }else{
    //to open
    // - temporarilty set height:auto
    // - tween from height:0
    TweenLite.set($(".content"), {height:"auto"});
    TweenLite.from($(".content"), 1, {height:0});
    tlTriangleSpin.play();
    $(".expander").removeClass("closed");
  }
})

var tlTriangleBob = new TimelineMax({repeat:"yoyo", repeatDelay:.25})
  .to($('.logotriangle'), 1.25, {y:"8pt"})
  .to($('.logotriangle'), 1.25, {y:"0pt"});

var tlTriangleGrow = new TimelineMax({paused:true})
  .to($('.logotriangle'), .5, {scaleX:1.1, scaleY:1.1});

$(".logotriangle" ).mouseenter(function() {
    tlTriangleGrow.play();
});

$(".logotriangle" ).mouseleave(function() {
    tlTriangleGrow.reverse();
});


var openedGameBoxWidth = "25%";
var openedProjectDetailsWidth = "75%"

var gameBoxSlider = new Object(); 
// gameBoxSlider = function(projectDetails, gameBox, clickElement, openVariable){   
gameBoxSlider = function(clickElement, openVariable){   
  var tl = new TimelineMax({paused:true}) 
    .to($(clickElement + ".projectDetails"), 0.7, { width:openedProjectDetailsWidth}, "half")
    .to($(clickElement + ".projectDetails"), 0.5, { width:"0%"}, "zero")
    .to($(clickElement + ".projectDetails"), 0.5, { width:openedProjectDetailsWidth}, "halfAgain"); 

  var tl2 = new TimelineMax({paused:true}) 
    .to($(clickElement + ".gameBox"), 0.6, { width: openedGameBoxWidth}, "half")
    .to($(clickElement + ".gameBox"), 0.6, { width:"100%"}, "full")
    .to($(clickElement + ".gameBox"), 0.6, { width: openedGameBoxWidth}, "halfAgain");


  $( clickElement + ".gameBox" ).click(function() {
    if ( openVariable == true ) {
      tl2.tweenFromTo("full", "halfAgain");
      tl.tweenFromTo("zero", "halfAgain")
      openVariable = false;
    }
    else {
      tl2.tweenFromTo("half", "full");
      tl.tweenFromTo("half", "zero");
      openVariable = true;
    };
    console.log('set ' + clickElement + ' to ' + openVariable);
  });

  var tl3 = new TimelineMax({paused:true}) 
    .to($(clickElement + ".gameBox"), 0.2, { x: "-10px"});

  // var tl4 = new TimelineMax({paused:true}) 
  //   .to($(clickElement + ".gameBox"), 0.2, { x: "10px"});

  $(clickElement + ".gameBox").mouseenter(function() {
    if ( openVariable == true ) {
      tl3.play();
    } else {
      tl3.play();
    }
  });

  $(clickElement + ".gameBox").mouseleave(function() {
    if ( openVariable == true ) {
      tl3.reverse();
    } else {
      tl3.reverse();
    }
  });

  return [tl, tl2, tl3];
}

// var logoshield = document.getElementById("#logoshield");

var initialLogoDelay = 1.25;
var logoClickHalf = .1;
var logoClickScale = 0.95
var initialLogoSpeed = 1.25;

var textmove = new TimelineMax({delay: initialLogoDelay + ( logoClickHalf *2 )})
  .set($("#logotext"), {x: -800})
  .to($("#logotext"), initialLogoSpeed, {x: 0});//Works

var shieldmove = new TimelineMax({delay: initialLogoDelay})
  .set($("#logoshield"), {x: 778})
  .to($("#logoshield"), logoClickHalf, {scaleX:logoClickScale, scaleY:logoClickScale, svgOrigin:"960 0"})
  .to($("#logoshield"), logoClickHalf, {scaleX:1, scaleY:1, svgOrigin:"960 0"})
  .to($("#logoshield"), initialLogoSpeed, {x: 0});//Works

// var topcopyReveal = new TimelineMax({delay: 3})
//   .set($(".topcopy"), {opacity: 0})
//   .to($(".topcopy"), 1, {opacity: 1});//Works


var openedwherethewater = false;
gameBoxSlider(".wherethewater", openedwherethewater);

var openedgonehome = false;
gameBoxSlider(".gonehome", openedgonehome);

var openedrk3000 = false;
gameBoxSlider(".rk3000", openedrk3000);

var openedhomeimprov = false;
gameBoxSlider(".homeimprov", openedhomeimprov);

var openeddelversdrop = false;
gameBoxSlider(".delversdrop", openeddelversdrop);

var openedbrigador = false;
gameBoxSlider(".brigador", openedbrigador);

var openedpioneers = false;
gameBoxSlider(".pioneers", openedpioneers);

var openedborumo = false;
gameBoxSlider(".borumo", openedborumo);

var openedkerfuffle = false;
gameBoxSlider(".kerfuffle", openedkerfuffle);

var openedmushroom11 = false;
gameBoxSlider(".mushroom11", openedmushroom11);



$(document).ready(function(){

});