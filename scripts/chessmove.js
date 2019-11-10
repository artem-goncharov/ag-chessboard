// Функция создаёт клон фигуры и добавляет его на доску в нужное место:
function moveFigure(elem, loc) {
	var oldFigure = document.getElementById(elem);
	var newFigure = oldFigure.cloneNode(true);
	var newFigPlace = document.getElementById(loc);
	
	var word = "div";
	var number = Math.random();
	var str, string;
	
	str = word + number;
	string = word + str.substr(str.length - 7);
	oldFigure.className = "hideElem";
	
	newFigure.onclick = wait;
	newFigure.className = "onBoard";
	newFigure.id = string;
	newFigPlace.appendChild(newFigure);
}
function wait() {
	// Ничего не делаем, фигура уже на доске в нужном месте
}



