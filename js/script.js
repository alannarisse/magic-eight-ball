$(".button").click(function () {
  //a random number is generated
  //that number chooses which string to display
  //the string displays in html
  let numVal = Math.floor(Math.random() * 10)
  const expr = numVal
  switch (expr) {
    case 1:
      console.log("Maybe")
      $("#triangle").attr("src", "images/ass.png")
      break
    case 2:
      console.log("Absolutely Not")
      $("#triangle").attr("src", "images/awkward.png")
      break
    case 3:
      console.log("Dont leave your house")
      $("#triangle").attr("src", "images/bad-timing.png")
      break
    case 4:
      console.log("Yes yes yes")
      $("#triangle").attr("src", "images/boy.png")
      break
    case 5:
      console.log("Bananapants")
      $("#triangle").attr("src", "images/definitely-yes.png")
      break
    case 6:
      console.log("You will live a long life, maybe")
      $("#triangle").attr("src", "images/f-off.png")
      break
    case 7:
      console.log("Probably yes")
      $("#triangle").attr("src", "images/hell.png")
      break
    case 8:
      console.log("u will survive 2022")
      $("#triangle").attr("src", "images/maybe-yes.png")
      break
    case 9:
      console.log("ice cream solves most problems")
      $("#triangle").attr("src", "images/nope.png")
      break
    case 10:
      console.log("you will be rewarded")
      $("#triangle").attr("src", "images/probably-maybe.png")
      break
    default:
      console.log("No")
      $("#triangle").attr("src", "images/thoughts.png")
  }
})

// Math.floor(Math.random() * 10) + 1

// if(something=true){
//   then do some stuff
// }
