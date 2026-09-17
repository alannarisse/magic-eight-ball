

$(".button").click(function (e) {
  newAnswer(e)
})


function newAnswer(e) { 

  //a random number is generated
  //that number chooses which string to display
  //the string displays in html
  // the numVal should be the same as the number of cases
 
  let numVal = Math.floor(Math.random() * 27)
  const expr = numVal
  switch (expr) {
    case 0:
      $("#triangle").attr("src", "images/gnarly.png")
      break
    case 1:
      //$('.answer).html("this is new");
      $("#triangle").attr("src", "images/ass.png")
      break
    case 2:
      $("#triangle").attr("src", "images/awkward.png")
      break
    case 3:
      $("#triangle").attr("src", "images/bad-timing.png")
      break
    case 4:
      $("#triangle").attr("src", "images/boy.png")
      break
    case 5:
      $("#triangle").attr("src", "images/definitely-yes.png")
      break
    case 6:
      $("#triangle").attr("src", "images/f-off.png")
      break
    case 7:
      $("#triangle").attr("src", "images/hell.png")
      break
    case 8:
      $("#triangle").attr("src", "images/maybe-yes.png")
      break
    case 9:
      $("#triangle").attr("src", "images/nope.png")
      break
    case 10:
      $("#triangle").attr("src", "images/probably-maybe.png")
      break
    case 11:
      $("#triangle").attr("src", "images/thoughts.png")
      break
    case 12:
      $("#triangle").attr("src", "images/time-right.png")
      break
    case 13:
      $("#triangle").attr("src", "images/wasting-my.png")
      break
    case 14:
      $("#triangle").attr("src", "images/wasting-your.png")
      break
    case 15:
      $("#triangle").attr("src", "images/whirl.png")
      break
    case 16:
      $("#triangle").attr("src", "images/abso.png")
      break
    case 17:
      $("#triangle").attr("src", "images/ask-your-mom.png")
      break
    case 18:
      $("#triangle").attr("src", "images/fuck-around-and.png")
      break
    case 19:
      $("#triangle").attr("src", "images/lmgtfy.png")
      break
    case 20:
      $("#triangle").attr("src", "images/ok-boomer.png")
      break
    case 21:
      $("#triangle").attr("src", "images/signs-point-to-your-mom.png")
      break
    case 22:
      $("#triangle").attr("src", "images/fat-chance.png")
      break
    case 23:
      $("#triangle").attr("src", "images/big-back.png")
      break
    case 24:
      $("#triangle").attr("src", "images/yes-yes.png")
      break
    case 25:
      $("#triangle").attr("src", "images/you-bet.png")
      break
    case 26:
      $("#triangle").attr("src", "images/not-my-problem.png")
      break
        case 27:
      $("#triangle").attr("src", "images/eat-my-shorts.png")
      break
    default:
      $("#triangle").attr("src", "images/thoughts.png")
  }

// Math.floor(Math.random() * 10) + 1

// if(something=true){
//   then do some stuff
// }

}

function handleMotion(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    const acceleration = Math.sqrt(x * x + y * y + z * z);

    // Implement your shake detection logic here
    // Example: Check if acceleration exceeds a threshold within a timeframe
    if (acceleration > 15 ) {
        newAnswer()
    }
}

window.addEventListener('devicemotion', handleMotion);