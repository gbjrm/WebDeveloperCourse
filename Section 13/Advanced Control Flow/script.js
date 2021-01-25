// condition? expr1 : expr2;

function isUserValid(bool){
	return bool;
}

var answer = isUserValid(true) ? "You man Enter" : "Acess Denied";

var automatedAnswer = "Your acont # is" + (isUserValid(false) ? "1234" : "not available");

function condition(){
	if (isUserValid(true)) {
		return "You may enter";
	}else{
		return "Acess denied";
	}
}

function moveCommand(direction){
	var whatHappens;
	switch (direction){
		case "forward" :
			whatHappens = "you enconter a monster";
			break;
	}
}