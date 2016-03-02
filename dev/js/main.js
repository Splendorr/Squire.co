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
//     initializeGameboxes();
//     // loadGfySingle(0);
//     // loadGfyTriple(0);
//     // loadGfyDouble(0);

//     // gfyCollection.init();
//   } // End gfyLoad()

// wherethewater
var openedwherethewater = false;

var wherethewaterDetails = new TimelineMax({paused:true});
wherethewaterDetails.to($(".wherethewaterProjectDetails"), 0.7, { width:"64.25%"}, "half")
.to($(".wherethewaterProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".wherethewaterProjectDetails"), 0.5, { width:"64.25%"}, "halfAgain");

var wherethewaterImage = new TimelineMax({paused:true});
wherethewaterImage.to($(".wherethewaterGamebox"), 0.6, { width:"35.75%"}, "half")
  .to($(".wherethewaterGamebox"), 0.6, { width:"100%"}, "full")
  .to($(".wherethewaterGamebox"), 0.6, { width:"35.75%"}, "halfAgain");

$( ".wherethewater" ).click(function() {
  if ( openedwherethewater == true ) {
    console.log("gowherethewaterImage")
    wherethewaterImage.tweenFromTo("full", "halfAgain");
    wherethewaterDetails.tweenFromTo("zero", "halfAgain")
    // wherethewaterDetails.reverse();
    openedwherethewater = false;
    console.log('set wherethewater 100' + openedwherethewater);
  }
  else {
    console.log("gowherethewaterDetails")
    wherethewaterImage.tweenFromTo("half", "full");
    wherethewaterDetails.tweenFromTo("half", "zero");
    // wherethewaterDetails.play(0);
    openedwherethewater = true;
    console.log('set wherethewater 50' + openedwherethewater);
  };
  console.log('clicked wherethewater');
});
// end wherethewater

// gonehome
var openedgonehome = false;

var gonehomeDetails = new TimelineMax({paused:true});
gonehomeDetails.to($(".gonehomeProjectDetails"), 0.7, { width:"64.25%"}, "half")
.to($(".gonehomeProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".gonehomeProjectDetails"), 0.5, { width:"64.25%"}, "halfAgain");

var gonehomeImage = new TimelineMax({paused:true});
gonehomeImage.to($(".gonehomeGamebox"), 0.6, { width:"35.75%"}, "half")
  .to($(".gonehomeGamebox"), 0.6, { width:"100%"}, "full")
  .to($(".gonehomeGamebox"), 0.6, { width:"35.75%"}, "halfAgain");

$( ".gonehome" ).click(function() {
  if ( openedgonehome == true ) {
    console.log("gogonehomeImage")
    gonehomeImage.tweenFromTo("full", "halfAgain");
    gonehomeDetails.tweenFromTo("zero", "halfAgain")
    // gonehomeDetails.reverse();
    openedgonehome = false;
    console.log('set gonehome 100' + openedgonehome);
  }
  else {
    console.log("gogonehomeDetails")
    gonehomeImage.tweenFromTo("half", "full");
    gonehomeDetails.tweenFromTo("half", "zero");
    // gonehomeDetails.play(0);
    openedgonehome = true;
    console.log('set gonehome 50' + openedgonehome);
  };
  console.log('clicked gonehome');
});
// end gonehome

// rk3000
var openedrk3000 = false;

var rk3000Details = new TimelineMax({paused:true});
rk3000Details.to($(".rk3000ProjectDetails"), 0.7, { width:"64.25%"}, "half")
.to($(".rk3000ProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".rk3000ProjectDetails"), 0.5, { width:"64.25%"}, "halfAgain");

var rk3000Image = new TimelineMax({paused:true});
rk3000Image.to($(".rk3000Gamebox"), 0.6, { width:"35.75%"}, "half")
  .to($(".rk3000Gamebox"), 0.6, { width:"100%"}, "full")
  .to($(".rk3000Gamebox"), 0.6, { width:"35.75%"}, "halfAgain");

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
homeimprovDetails.to($(".homeimprovProjectDetails"), 0.7, { width:"64.25%"}, "half")
.to($(".homeimprovProjectDetails"), 0.5, { width:"0%"}, "zero")
.to($(".homeimprovProjectDetails"), 0.5, { width:"64.25%"}, "halfAgain");

var homeimprovImage = new TimelineMax({paused:true});
homeimprovImage.to($(".homeimprovGamebox"), 0.6, { width:"35.75%"}, "half")
  .to($(".homeimprovGamebox"), 0.6, { width:"100%"}, "full")
  .to($(".homeimprovGamebox"), 0.6, { width:"35.75%"}, "halfAgain");

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