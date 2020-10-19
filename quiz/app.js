var agree = parseInt(document.getElementByID("agree").value);
var neutral = parseInt(document.getElementByID("neutral").value);
var disagree = parseInt(document.getElementByID("disagree").value);

function question1(){
	if (choice === agree){
		value = 3;
	} else if (choice === neutral){
		value = 2;
	} else {
		value = 1;
	}
};

var question1 = question1();

function question2(){
	if (choice === agree){
		value = 3;
	} else if (choice === neutral){
		value = 2;
	} else {
		value = 1;
	}
};

var question2 = question2();

function question3(){
	if (choice === agree){
		value = 3;
	} else if (choice === neutral){
		value = 2;
	} else {
		value = 1;
	}
};

var question3 = question3();

function question4(){
	if (choice === agree){
		value = 3;
	} else if (choice === neutral){
		value = 2;
	} else {
		value = 1;
	}
};

var question4 = question4();

var Culinary = question1 + question2;

var Accounting = question3 + question4;

function submit(){
	console.log(Culinary);
	console.log(Accounting);
}