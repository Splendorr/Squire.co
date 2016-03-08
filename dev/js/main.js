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
// gameBoxes.forEach(function(element, index, array) {
//   console.log(element + ' index is ' + index)
//   var tl = index;
//   console.log(tl)
// });

// function gamesLoad() {

//     console.log('GAMEBOXES: ran gamesLoad');
//     initializeGameBoxes();
//     // loadGfySingle(0);
//     // loadGfyTriple(0);
//     // loadGfyDouble(0);

//     // gfyCollection.init();
//   } // End gfyLoad()

// wherethewater

// var openedGameBoxWidth = "35.75%";
// var openedProjectDetailsWidth = "64.25%"

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

  return [tl, tl2];
}

var openedwherethewater = false;
var openedgonehome = false;

gameBoxSlider(".wherethewater", openedwherethewater);
gameBoxSlider(".gonehome", openedgonehome);


// rk3000
var openedrk3000 = false;

var rk3000Details = new TimelineMax({paused:true});
rk3000Details.to($(".rk3000ProjectDetails"), 0.7, { width:openedProjectDetailsWidth}, "half")
.to($(".rk3000ProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".rk3000ProjectDetails"), 0.5, { width:openedProjectDetailsWidth}, "halfAgain");

var rk3000Image = new TimelineMax({paused:true});
rk3000Image.to($(".rk3000GameBox"), 0.6, { width:openedGameBoxWidth}, "half")
  .to($(".rk3000GameBox"), 0.6, { width:"100%"}, "full")
  .to($(".rk3000GameBox"), 0.6, { width:openedGameBoxWidth}, "halfAgain");

$( ".rk3000" ).click(function() {
  if ( openedrk3000 == true ) {
    console.log("gork3000Image")
    rk3000Image.tweenFromTo("full", "halfAgain");
    rk3000Details.tweenFromTo("zero", "halfAgain")
    // rk3000Details.reverse();
    openedrk3000 = false;
    console.log('set rk3000 100' + openedrk3000);
  }
  else {
    console.log("gork3000Details")
    rk3000Image.tweenFromTo("half", "full");
    rk3000Details.tweenFromTo("half", "zero");
    // rk3000Details.play(0);
    openedrk3000 = true;
    console.log('set rk3000 50' + openedrk3000);
  };
  console.log('clicked rk3000');
});
// end rk3000

// homeimprov
var openedhomeimprov = false;

var homeimprovDetails = new TimelineMax({paused:true});
homeimprovDetails.to($(".homeimprovProjectDetails"), 0.7, { width:openedProjectDetailsWidth}, "half")
.to($(".homeimprovProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".homeimprovProjectDetails"), 0.5, { width:openedProjectDetailsWidth}, "halfAgain");

var homeimprovImage = new TimelineMax({paused:true});
homeimprovImage.to($(".homeimprovGameBox"), 0.6, { width:openedGameBoxWidth}, "half")
  .to($(".homeimprovGameBox"), 0.6, { width:"100%"}, "full")
  .to($(".homeimprovGameBox"), 0.6, { width:openedGameBoxWidth}, "halfAgain");

$( ".homeimprov" ).click(function() {
  if ( openedhomeimprov == true ) {
    console.log("gohomeimprovImage")
    homeimprovImage.tweenFromTo("full", "halfAgain");
    homeimprovDetails.tweenFromTo("zero", "halfAgain")
    // homeimprovDetails.reverse();
    openedhomeimprov = false;
    console.log('set homeimprov 100' + openedhomeimprov);
  }
  else {
    console.log("gohomeimprovDetails")
    homeimprovImage.tweenFromTo("half", "full");
    homeimprovDetails.tweenFromTo("half", "zero");
    // homeimprovDetails.play(0);
    openedhomeimprov = true;
    console.log('set homeimprov 50' + openedhomeimprov);
  };
  console.log('clicked homeimprov');
});
// end homeimprov




$(document).ready(function(){

});