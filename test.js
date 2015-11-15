
var masCorrect = ["r11","r23", "r34","p42","p44","p51","p52"];
function clickRes(){
	var first = document.getElementsByName("r1");
	var second = document.getElementsByName("r2");
	var third = document.getElementsByName("r3");
	var fourth = document.getElementsByName("p4");
	var fifth = document.getElementsByName("p5");
	var sum=0;
	sum =CheckAnswer(first, sum,true);
	sum =CheckAnswer(second, sum,true);
	sum =CheckAnswer(third, sum,true);
	sum =CheckAnswer(fourth, sum, false);
	sum =CheckAnswer(fifth, sum,false);
	alert("Result: "+sum);
  }

function findElInMas(el)
{
	for (var i = 0; i < masCorrect.length; i++){
		if (el==masCorrect[i]){
			return true;
		}
	}
	return false;

}

function CheckAnswer(mas, sum, thisRadio){
	var minusBall = 0;
	var addBall = 0;
	for (var i = 0; i < mas.length; i++) {
		//alert(mas[i].getAttribute("value")+ mas[i].checked);
		if (mas[i].checked==true && findElInMas(mas[i].getAttribute("value"))){
			if (thisRadio == true){
				addBall = addBall+1;
				//alert(addBall);
			}
			else{
				addBall =addBall+0.5;
			}
		}
		else {
			if (thisRadio == false&&mas[i].checked==true){
			minusBall = minusBall+0.5;
			//alert(minusBall+mas[i].getAttribute("value"));
			}
		}
	 }
	 //alert(addBall+";"+minusBall);
	if (addBall>minusBall){
		return sum = sum+addBall-minusBall;
	}
	return sum;
}