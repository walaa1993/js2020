/*Input onchange event */
function preferedMeal() {
	prefer = document.forms[0].meals.value;
	alert("your favourite meal is " + prefer);
}

/*Input onfocus event */
function myFun(x) {
	x.style.background = "blue";
}

/*Input OnKeyUp event*/
function myFunction() {
	var x = document.getElementById("fname");
	x.value = x.value.toUpperCase();
}

/*Mouse Onmousedown which botton event*/
function WhichButton(event) {
	alert("You pressed button: " + event.button)
}

/*Click onclick event*/
function myFunction1(){
	document.getElementById("dem").innerHTML ="Hello World";
}

/*load onload event*/
function imgError() {
	alert('The image could not be loaded.');
}

/*Other events*/
function show_coords(event) {
	document.getElementById("cor").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}

/*add copyright link to copied text*/
function displayDate() {
  document.getElementById("o").innerHTML = Date();
}