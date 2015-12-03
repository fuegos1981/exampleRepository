var firstElement ="";
var secondElement="";
var operation="";
var masNum =['0','1','2', '3', '4','5','6','7','8','9','.'];
var result="";
var textRes = "";

$(":button").bind("click", function() {
	if(this.name =="btZn"){
		clickBtn("znak");
	}
	else	
		{clickBtn($(this).val());}
	
  //alert(this.value);
});




function clickBtn(el,btn){
	
	var textEdit =$(":text").eq(0);;//document.getElementById("textInput");
	var resComent = $("span").eq(0);//document.getElementById("result");
	if (findElInMas(el)){
		if (secondElement==""&&operation==""){
			firstElement = firstElement+el;
			textEdit.val(firstElement);//.setAttribute("value",firstElement);
			}
		else {secondElement=secondElement+el;
			textEdit.val(secondElement);//setAttribute("value",secondElement);
		}
		textRes = textRes+el;
		
		resComent.html(textRes);//innerHTML =textRes;
		
	}
	else if (el =='C') {
		firstElement ="";
		secondElement="";
		operation="";
		textRes = "";
		resComent.html("");//.innerHTML = "";
		textEdit.val(textRes);//setAttribute("value",textRes);
	}
	else if (el =="znak") {
		if (secondElement==""&&operation==""){
			firstElement = -+firstElement;
			textRes = firstElement;
			textEdit.val(textRes);//.setAttribute("value",textRes);
			}
		else if (secondElement!=0) {secondElement=-+secondElement;
			textRes = firstElement+el+ secondElement;
			textEdit.val(secondElement);//.setAttribute("value",secondElement);
		}
		resComent.html(textRes);//.innerHTML = textRes;
		
	}
	else if (el !='=' && operation=="") {
		operation= el;
		textRes = textRes+operation;
		//textEdit.setAttribute("value",textRes);
		resComent.html(textRes);//.innerHTML = textRes;
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

		
		textEdit.val(result);//.setAttribute("value",result);
		if (mistake){
			firstElement ="";
			textRes ="";
		}
		else {firstElement =result;}
		
		if (el=='='){
			operation="";
			textRes =textRes+"="+ result;
			resComent.html(textRes);//.innerHTML =textRes;
			
		}
		else {
			operation=el;
			textRes =textRes+el;
			resComent.html(textRes);//.innerHTML =textRes;
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


