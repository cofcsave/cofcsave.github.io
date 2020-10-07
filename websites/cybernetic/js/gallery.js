var lite = document.getElementsByClassName('vlite');
var standard = document.getElementsByClassName('vstandard');
var ultimate = document.getElementsByClassName('vultimate');

 function zoom(image) {
    document.getElementById(image).src='img/showcase/zoom/' + image + '.jpg';
  }
  
function removeStyle(noList) {
	for (var i = 0; i < noList.length; i++) {
	noList[i].classList.remove('mystyle'); 
	}
}

function addStyle(removeOne){
	for (var x = 0; x < removeOne.length; x++) {
	removeOne[x].classList.add('mystyle'); 
	}
}

function fillSolid(itemsName, style){
	var items = document.getElementsByClassName(itemsName);
		items[0].classList.add(style);
}

function fillEmpty(itemsOne, itemsTwo, itemsThree, style){
	var items = document.getElementsByClassName(itemsOne);
	var itemsOther = document.getElementsByClassName(itemsTwo);
	var itemsMore = document.getElementsByClassName(itemsThree);
		items[0].classList.remove(style);
		itemsOther[0].classList.remove(style);
		itemsMore[0].classList.remove(style);
}

function setOverlay(classNames){
	if (classNames === 'vlite') {
		removeStyle(lite);
		addStyle(standard);
		addStyle(ultimate);
		fillSolid('litebutton', 'buttonBlue');
		fillEmpty('trialbutton', 'standardbutton', 'ultimatebutton', 'buttonBlue');
	} else if (classNames === 'vstandard') {
		removeStyle(lite);
		removeStyle(standard);
		addStyle(ultimate);
		fillSolid('standardbutton', 'buttonBlue');
		fillEmpty('trialbutton', 'litebutton', 'ultimatebutton', 'buttonBlue');
	} else if (classNames === 'vultimate') {
		removeStyle(lite);
		removeStyle(standard);
		removeStyle(ultimate);
		fillSolid('ultimatebutton', 'buttonBlue');
		fillEmpty('trialbutton', 'standardbutton', 'litebutton', 'buttonBlue');
	} else {
		addStyle(standard);
		addStyle(ultimate);
		addStyle(lite);
		fillSolid('trialbutton', 'buttonBlue');
		fillEmpty('litebutton', 'standardbutton', 'ultimatebutton', 'buttonBlue');
	}
}

