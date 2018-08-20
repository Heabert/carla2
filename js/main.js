function validateForm(params) {
    var studentName = document.getElementById("studentName").value;
    var studentAge = document.getElementById("studentsAge").value;
    var favSubject = document.getElementById("favSubject").value;
    var favTeacher = 'Ms. Carla';

    document.getElementById("outputName").innerHTML = 'Hello, your name is ' + studentName + ' !';
    document.getElementById("outputAge").innerHTML = 'Wow, you are ' + studentAge + ' years old !';
    document.getElementById("outputFavSub").innerHTML = 'Your favorite subject is ' + favSubject + " !";
    document.getElementById("outputFavTeach").innerHTML = 'Your favorit teache is' + favTeacher + " XD !";
};


function spelling(){
 var listOfImages = [{"img":"https://img.src", "name":"banana"}, {"img":"https://img.src2", "name":"door"}]

document.getElementById("a1").innerHTML = listOfImages[1].name + " " + listOfImages[1].img
};


function addIt(){
	var num1ans = 0;
	var num2ans = 0;
	var sum = 0;
	var count1 = 0;
	var response = "";
	var result = "";



	var num1ans = (math.floor(math.random() * 10)) + 1 ;
	var num2ans = (math.floor(math.random() * 10)) + 1 ;
	var sum = num1ans + num2ans;
	var response = parseInt(prompt("what is the sum of num1ans" + "and" + num2ans + "?"));

	if (response == sum) {

		count1 = count1 + 1;
		result = "correct";
		alert(result);
	}
	else{
		result = "incorrect";
		alert(result);
	}
	if (count1 === 3) {
		levelTwo();
		return;	}
}

