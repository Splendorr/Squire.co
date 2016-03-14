// console.log 'hello there!'

console.log('priming');

//touch click helper
(function ($) {
    $.fn.tclick = function (onclick) {
        this.bind("touchstart", function (e) { onclick.call(this, e); e.stopPropagation(); e.preventDefault(); });
        this.bind("mousedown", function (e) { onclick.call(this, e); });   //substitute mousedown event for exact same result as touchstart         
        return this;
    };
})(jQuery);

var tlTriangleSpin = new TimelineMax({paused:true, delay: 0.5})
  // .to($('.logotriangle'), 0.01, {y: "1em"})
  .to($('.logotriangle'), 0.75, {rotationX: "+=180", force3D:true}, 0.5);

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
    TweenMax.to($(".content"), 1, {height:0, force3D:true, onComplete:clearBrowserState});
    tlTriangleSpin.reverse();
    $(".expander").addClass("closed")
  }else{
    //to open
    // - temporarilty set height:auto
    // - tween from height:0
    TweenMax.set($(".content"), {height:"auto", force3D:true});
    TweenMax.from($(".content"), 1, {height:0, force3D:true, onComplete:clearBrowserState});
    tlTriangleSpin.play();
    $(".expander").removeClass("closed");
  }
})

function clearBrowserState () {
  if (window.history && window.history.pushState) {
    history.replaceState("", document.title, "#");
  }
}

var tlTriangleBob = new TimelineMax({repeat:"yoyo", repeatDelay:.25})
  .to($('.logotriangle'), 1.25, {y:"8pt"})
  .to($('.logotriangle'), 1.25, {y:"0pt"});

var tlTriangleGrow = new TimelineMax({paused:true})
  .to($('.logotriangle'), .1, {scaleX:1.1, scaleY:1.1});

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
    .to($(clickElement + ".gameBox"), 0.1, { x: "-10px", force3D:true });

  var tl4 = new TimelineMax({paused:true}) 
    .to($(clickElement + ".gameBox"), 0.05, { x: "0px", force3D:true });

  // var tl4 = new TimelineMax({paused:true}) 
  //   .to($(clickElement + ".gameBox"), 0.2, { x: "10px"});

  $(clickElement + ".gameBox").on("pointerenter", function() {
    if ( openVariable == true ) {
      tl3.play().timeScale(1);
    } else {
      tl3.play().timeScale(1);
    }
  });

  $(clickElement + ".gameBox").on("pointerleave", function() {
    if ( openVariable == true ) {
      tl3.reverse().timeScale(4);
      // tl4.play();
    } else {
      tl3.reverse().timeScale(4);
      // tl4.play();
    }
  });

  return [tl, tl2, tl3];
}


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


/////////// LOGO SHIELD

// var logoshield = document.getElementById("#logoshield");

// var initialLogoDelay = 1.25;
var logoClickHalf = 0.01;
var logoClickHold = 0.1;
var logoClickScale = 0.95
var initialLogoSpeed = 1.25;
var logoSpreadEasing = "Power1.easeInOut";
// var logoSpreadEasing = "Power0";

var logoOpener = new Object();

var hasLogoOpened = false;
var logoOpened = true;

logoOpener = function (initialLogoDelay) {

  var textmove = new TimelineMax({delay: initialLogoDelay + ( logoClickHalf *2 ) + (logoClickHold *2 )});

  var shieldmove = new TimelineMax({delay: initialLogoDelay});

  logoOpenFunction = function (whatToClick) {
    textmove
      // .set($("#logotext"), {x: -800})
      .to($("#logotext"), initialLogoSpeed, {x: 0, ease: logoSpreadEasing});//Works

    shieldmove
      // .set($("#logoshield"), {x: 778})
      .to($(whatToClick), logoClickHalf, {scaleX:logoClickScale, scaleY:logoClickScale, svgOrigin:"960 0"})
      .to($(whatToClick), logoClickHalf, {scaleX:1, scaleY:1, svgOrigin:"960 0"}, (logoClickHalf + logoClickHold) )
      .to($("#logoshield"), initialLogoSpeed, {x: 0, ease: logoSpreadEasing}, "+=" + logoClickHold);//Works
  };

  if ( hasLogoOpened == false ) {
      textmove
        .set($("#logotext"), {x: -800})

      shieldmove
        .set($("#logoshield"), {x: 778})

      logoOpenFunction("#Layer_1")

      hasLogoOpened = true;
      console.log("opening logo for the first time");

  } else {
    logoOpenFunction("#Layer_1")
    console.log("opening logo again");

  }

}; // End logoOpener()

var logoCloser = new Object();
logoCloser = function (initialLogoDelay) {
var textmove = new TimelineMax({delay: initialLogoDelay + ( logoClickHalf *2 ) + (logoClickHold * 2 )})
  // .set($("#logotext"), {x: 0})
  .to($("#logotext"), initialLogoSpeed, {x: -800, ease: logoSpreadEasing});//Works

var shieldmove = new TimelineMax({delay: initialLogoDelay})
  // .set($("#logoshield"), {x: 778})
  .to($("#Layer_1"), logoClickHalf, {scaleX:logoClickScale, scaleY:logoClickScale, svgOrigin:"960 0"})
  .to($("#Layer_1"), logoClickHalf, {scaleX:1, scaleY:1, svgOrigin:"960 0"}, (logoClickHalf + logoClickHold) )
  .to($("#logoshield"), initialLogoSpeed, {x: 778, ease: logoSpreadEasing}, "+=" + logoClickHold);//Works
};


logoOpener(1.25);
// logoCloser();

$( ".squirelogoleft" ).on("pointerdown", function() {
  if ( logoOpened == true ) {
    logoCloser(0);
    logoOpened = false;
  }
  else {
    logoOpener(0);
    logoOpened = true;
  };
  console.log('set .squirelogoleft to ' + logoOpened);
});



// var topcopyReveal = new TimelineMax({delay: 3})
//   .set($(".topcopy"), {opacity: 0})
//   .to($(".topcopy"), 1, {opacity: 1});//Works



$(document).ready(function(){

});