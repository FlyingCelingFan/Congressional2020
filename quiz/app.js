
var total = 0

//The following functions adds what is says
function one(){
	total=total+1;
}

function two(){
	total=total+2;
}

function three(){
	total=total+3;
}

function four(){
	total=total+4;
}

function five(){
	total=total+5;
}

//functions to hide questions

function delete1(){
	document.getElementById("question1").style.display="none";
}

function delete2(){
	document.getElementById("question2").style.display="none";
}

function delete3(){
	document.getElementById("question3").style.display="none";
}

function delete4(){
	document.getElementById("question4").style.display="none";
}

function delete5(){
	document.getElementById("question5").style.display="none";
}

//add result function below

function showResult(){
	if (total <= 5){
		document.getElementById("result").innerHTML = ("Your Recommended Academy is Arts and Communication!")
	} else if (total >= 6 && total <= 10){
		document.getElementById("result").innerHTML = ("Your Recommended Academy is Health and Sciences!")
	} else if (total >= 11 && total <= 15){
		document.getElementById("result").innerHTML = ("Your Recommended Academy is Information Engineering Technology!")
	} else if (total >= 16 && total <= 20){
		document.getElementById("result").innerHTML = ("Your Recommended Academy is Natural Resources!")
	} else if (total >= 21 && total <= 25) {
		document.getElementById("result").innerHTML = ("Your Recommended Academy is Professional and Public Services!")
	}
}