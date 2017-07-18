let char = document.getElementById('char');
let height = document.getElementById('height');
let button = document.getElementsByTagName('button');

let tree = function(char, height) {
	this.char = char,
	this.height = height
}

function growTree() {
	//build myTree object with values in height and char fields
	let myTree = new tree(char.value, parseInt(height.value));
	//check if height is not a number || if char is empty string
	if (isNaN(myTree.height) || myTree.char === '') {
		console.log('Both fields must have a value');
		return;
	}
	//set message container
	let message = '';
	//for the height of the tree
	for(let i = 1; i <= myTree.height; i++) {
		//generate spaces, subtract 1 with every iteration
	    for(let j = myTree.height - i; j >= 1; j--) {
	      message += ' ';
	    }
	    //generate chars, add 1 with every iteration
	    for(let k = 0; k < (i*2)-1; k++) {
	      message += myTree.char;
	    }
	    //add line break after each iteration
	    message += '\n';
	  }
	console.log(message);
}

button[0].addEventListener('click', growTree);

document.addEventListener('keyup', function(event){
	if (event.which === 13) {
		growTree();
	}
});
