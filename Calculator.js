var firstElement ="";
var secondElement="";
var operation="";
var masNum =['0','1','2', '3', '4','5','6','7','8','9','.'];
var result="";
var textRes = "";

function clickBtn(el){
	var textEdit =document.getElementById("textInput");
	if (findElInMas(el)){
		if (secondElement==""&&operation==""){
			firstElement = firstElement+el;}
		else {secondElement=secondElement+el;}
		textRes = textRes+el;
		textEdit.setAttribute("value",textRes);
	}
	else if (el =='C') {
		firstElement ="";
		secondElement="";
		operation="";
		textRes = "";
		textEdit.setAttribute("value",textRes);
	}
	else if (el =='znak') {
		if (secondElement==""&&operation==""){
			firstElement = -+firstElement;
			textRes = firstElement;
			}
		else if (secondElement!=0) {secondElement=-+secondElement;
			textRes = firstElement+el+ secondElement;
		}
		
		textEdit.setAttribute("value",textRes);
	}
	else if (el !='Equal') {
		operation= el;
		textRes = textRes+operation;
		textEdit.setAttribute("value",textRes);
		
	}
	else {
		mistake=false;
		switch (operation) {
			case '/': 
				if (secondElement =='0'){
					result ="нельзя делить на ноль!";
					mistake=true;
					}
				else{
					result =+firstElement/+secondElement;
					}
				break;
			case '+': 
				result =+firstElement+ +secondElement;
				break;
			case '-':
				result =+firstElement-+secondElement;
				break;
			default:
				result =+firstElement*+secondElement;
				break;
		}
		//alert("firstElement"+firstElement+"; secondElement "+secondElement+"operation "+operation);
		
		secondElement="";
		operation="";
		textRes =result;
		textEdit.setAttribute("value",textRes);
		if (mistake){
			firstElement ="";
			textRes ="";
		}
		else {firstElement =result;}
		}

}

function findElInMas(el)
{
	for (var i = 0; i <= masNum.length-1; i++){
		if (el==masNum[i]){
			return true;
		}
	}
	return false;

}


