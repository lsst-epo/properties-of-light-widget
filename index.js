var zoom = 100;


function Zoom() {
	zoom++;
	console.log(zoom)
	document.getElementsByClassName('b_filter')[0].setAttribute('style', 'background-size: ' + zoom + '%');
	document.getElementsByClassName('u_filter')[0].setAttribute('style', 'background-size: ' + zoom + '%');
	document.getElementsByClassName('v_filter')[0].setAttribute('style', 'background-size: ' + zoom + '%');

}

function check_toggle() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var image = document.getElementById("1");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    image.style.display = "none";
  } else {
    image.style.display = "block";
  }
}

var blueSat = document.getElementById("blueSat");
var blueBright = document.getElementById("blueBright");

blueSat.addEventListener('change', function() {
	document.getElementById('1').setAttribute("style", "-webkit-filter:saturate(" + this.value + ")");
});
blueBright.addEventListener('change', function() {
	document.getElementById('1').setAttribute("style", "-webkit-filter:brightness(" + this.value + ")");
});

var greenSat = document.getElementById("greenSat");
var greenBright = document.getElementById("greenBright");

greenSat.addEventListener('change', function() {
	document.getElementById('2').setAttribute("style", "-webkit-filter:saturate(" + this.value + ")");
});
greenBright.addEventListener('change', function() {
	document.getElementById('2').setAttribute("style", "-webkit-filter:brightness(" + this.value + ")");
});
 
var redSat = document.getElementById("redSat");
var redBright = document.getElementById("redBright");

redSat.addEventListener('change', function() {
	document.getElementById('3').setAttribute("style", "-webkit-filter:saturate(" + this.value + ")");
});
redBright.addEventListener('change', function() {
	document.getElementById('3').setAttribute("style", "-webkit-filter:brightness(" + this.value + ")");
});



var button = document.getElementById('button'); 
button.addEventListener('click', function() {
	document.getElementById('1').setAttribute("style", "-webkit-filter: brightness(100%);-webkit-filter: saturate(2.5); ");
	// document.getElementById('1').style.backgroundColor = "transparent";
	document.getElementById('2').setAttribute("style", "-webkit-filter: brightness(500%); -webkit-filter: saturate(17); ");
	// document.getElementById('2').style.backgroundColor = "transparent !important";
	document.getElementById('3').setAttribute("style", "-webkit-filter: saturate(4.4);-webkit-filter: brightness(320%); ");
	// document.getElementById('3').style.backgroundColor = "transparent";});
});