// console.log 'hello there!'

console.log('priming');

// This works to make a box grow, only the one that's clicked
// $( ".boxGenie" ).click(function() {
//   // filter contracted so that unnecessary tweens on already .expanded aren't created
//   var contracted = $(this).not(".boxGenieOpened");
  
//   // include contracted as well since they aren't .expanded yet
//   var expanded = contracted.add(".boxGenieOpened");
  
//   var tl = new TimelineLite();
//   tl.to(contracted, 2, { className:"+=boxGenieOpened" })
//     .to(expanded, 2, { className:"-=boxGenieOpened" }, 5)
// });


var opened = false;
var tl = new TimelineMax();

$( ".gonehome" ).click(function() {
  // filter contracted so that unnecessary tweens on already .expanded aren't created

  if ( opened == true ) {
    tl.to($("#goneHomeShifter"), .5, { className:"-=boxGenieOpened", ease:Power2.easeOut })
    opened = false;
    console.log('removed boxGenieOpened');
  }
  else {
    tl.to($("#goneHomeShifter"), .5, { className:"+=boxGenieOpened", ease:Power2.easeOut })
    opened = true;
    console.log('added a boxGenie');
  };

  // if ( $(this).hasClass(".boxGenieOpened") ) {
  //   tl.to($(this), 2, { className:"-=boxGenieOpened" })
  //   console.log('removed boxGenieOpened');
  // }
  // else if ( !$(this).hasClass(".boxGenieOpened") ) {
  //   tl.to($(this), 2, { className:"+=boxGenieOpened" })
  //   console.log('added a boxGenie');
  // };
  
  console.log('clicked a boxGenie');
  // include contracted as well since they aren't .expanded yet
  // var expanded = contracted.add(".boxGenieOpened");
  
  // var tl = new TimelineLite();
  // tl.to(unopened, 2, { className:"+=boxGenieOpened" })
  //   // .to(expanded, 2, { className:"-=boxGenieOpened" }, 5)
});

var openedWTW = false;
// var wtwDetails = new TimelineMax({paused:true});
// wtwDetails.set($(".wtwProjectDetails"), { width:"50%",visibility:"visible"})
// .from($(".wtwProjectDetails"), 0.6, {width:"0%", autoAlpha:0});

var wtwDetails = new TimelineMax({paused:true});
wtwDetails.to($(".wtwProjectDetails"), 0.7, { width:"67%"}, "half")
.to($(".wtwProjectDetails"), 0.5, {width:"0%"}, "zero")
.to($(".wtwProjectDetails"), 0.5, { width:"67%"}, "halfAgain");

// var wtwImage = new TimelineMax();
// wtwImage.set($(".wtwGamebox"), { width:"100%"})
// .from($(".wtwGamebox"), 0.6, {width:"50%"});

var wtwImage = new TimelineMax({paused:true});
wtwImage.to($(".wtwGamebox"), 0.6, {width:"33%"}, "half")
  .to($(".wtwGamebox"), 0.6, { width:"100%"}, "full");


$( ".wherethewater" ).click(function() {
  // filter contracted so that unnecessary tweens on already .expanded aren't created

  if ( openedWTW == true ) {
    console.log("gowtwImage")
    wtwImage.tweenFromTo("full", "half");
    wtwDetails.tweenFromTo("zero", "halfAgain");
    // wtwDetails.reverse();
    openedWTW = false;
    console.log('set wtw 100' + openedWTW);
  }
  else {
    console.log("gowtwDetails")
    wtwImage.tweenFromTo("half", "full");
    wtwDetails.tweenFromTo("half", "zero");
    // wtwDetails.play(0);
    openedWTW = true;
    console.log('set wtw 50' + openedWTW);
  };
  console.log('clicked WTW');
});

// $( ".boxGenie" ).click(function() {
//   var tl = new TimelineLite();
//   tl.to($(this), 2, { className:"boxGenieOpened" })
// });

// $( ".boxGenieOpened" ).click(function() {
//   var tl = new TimelineLite();
//   tl.to($(this), 2, { className:"boxGenie" })
// });

$(document).ready(function(){

  // $( ".boxGenie" ).click(function() {
  //   var tl = new TimelineLite();
  //   tl.to(".boxGenie", 2, { className:"boxGenieOpened" });
  //     // targets only class will become .expanded (no .box)
  //     .to(".", 2, { className:"boxGenie" }, 5)
  //     // // targets only class will become .contracted
  // });

  // $( ".boxGenieOpened" ).click(function() {
  //   var tl = new TimelineLite();
  //   tl.to(".boxGenieOpened", 2, { className:"boxGenie" });
  //     // targets only class will become .expanded (no .box)
  //     // .to(target, 2, { className:"boxGenie" }, 5)
  //     // // targets only class will become .contracted
  // });

});