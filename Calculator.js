var firstElement ="";
var secondElement="";
var operation="";
var masNum =['0','1','2', '3', '4','5','6','7','8','9','.'];
var result="";
var textRes = "";

function clickBtn(el){
	var textEdit =document.getElementById("textInput");
	var resComent = document.getElementById("result");
	if (findElInMas(el)){
		if (secondElement==""&&operation==""){
			firstElement = firstElement+el;
			textEdit.setAttribute("value",firstElement);
			}
		else {secondElement=secondElement+el;
			textEdit.setAttribute("value",secondElement);
		}
		textRes = textRes+el;
		
		resComent.innerHTML =textRes;
		
	}
	else if (el =='C') {
		firstElement ="";
		secondElement="";
		operation="";
		textRes = "";
		resComent.innerHTML = "";
		textEdit.setAttribute("value",textRes);
	}
	else if (el =='znak') {
		if (secondElement==""&&operation==""){
			firstElement = -+firstElement;
			textRes = firstElement;
			textEdit.setAttribute("value",textRes);
			}
		else if (secondElement!=0) {secondElement=-+secondElement;
			textRes = firstElement+el+ secondElement;
			textEdit.setAttribute("value",secondElement);
		}
		resComent.innerHTML = textRes;
		
	}
	else if (el !='Equal' && operation=="") {
		operation= el;
		textRes = textRes+operation;
		//textEdit.setAttribute("value",textRes);
		resComent.innerHTML = textRes;
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

		
		textEdit.setAttribute("value",result);
		if (mistake){
			firstElement ="";
			textRes ="";
		}
		else {firstElement =result;}
		
		if (el=='Equal'){
			operation="";
			textRes =textRes+"="+ result;
			resComent.innerHTML =textRes;
			
		}
		else {
			operation=el;
			textRes =textRes+el;
			resComent.innerHTML =textRes;
		}	
		
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


