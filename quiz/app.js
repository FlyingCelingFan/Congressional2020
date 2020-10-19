var question1 = document.getElementByID("question1");
var question2 = document.getElementByID("question2");
var question3 = document.getElementByID("question3");
var question4 = document.getElementByID("question4");

function Cul_question1(question1){
	if (document.getElementsByName("agree").clicked = true){
		return 3;
	} else if (document.getElementsByName("neutral").clicked = true){
		return 2;
	} else {
		return 1;
	}
};

var Culinary_question1 = Cul_question1();

function Cul_question2(question2){
	if (document.getElementsByName("agree").clicked = true){
		return 3;
	} else if (document.getElementsByName("neutral").clicked = true){
		return 2;
	} else {
		return 1;
	}
};

var Culinary_question2 = Cul_question2();

function Acc_question3(question3){
	if (document.getElementsByName("agree").clicked = true){
		return 3;
	} else if (document.getElementsByName("neutral").clicked = true){
		return 2;
	} else {
		return 1;
	}
};

var Accounting_question3 = Acc_question3();

function Acc_question4(question4){
	if (document.getElementsByName("agree").clicked = true){
		return 3;
	} else if (document.getElementsByName("neutral").clicked = true){
		return 2;
	} else {
		return 1;
	}
};

var Accounting_question4 = Acc_question4();

var Culinary = Cul_question1 + Cul_question2;

var Accounting = Acc_question3 + Acc_question4;

function result(){
	console.log(Culinary);
	console.log(Accounting);
};


document.getElementById("submit").innerHTML = result();
