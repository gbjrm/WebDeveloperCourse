var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//creating a delete button
	var button = document.createElement("button");
  	button.appendChild(document.createTextNode("delete"));
  	li.appendChild(button);
  	button.onclick=removeParent;

}

function addListAfterClick(){
	if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterKeyPress(event){
	if (inputLength() > 0 && event.keyCode ===13) {
		createListElement();
	}
}

function deleteItem(){
	li.remove();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)