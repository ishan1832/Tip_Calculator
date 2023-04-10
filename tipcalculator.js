//Calculate Tip
var $ = function(id) {
  return document.getElementById(id);
};

function calculateTip() {
  var billAmt = $("billamt").value;
  var serviceQual = $("serviceQual").value;
  var numOfPeople = $("peopleamt").value;

  if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
  }
  if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      $("each").style.display = "none";
  } else {
      $("each").style.display = "block";
  }
  var total = (billAmt * serviceQual) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  $("totalTip").style.display = "block";
  $("tip").innerHTML = total;
}
$("totalTip").style.display = "none";
$("each").style.display = "none";
$("calculate").onclick = function() {
  calculateTip();
};