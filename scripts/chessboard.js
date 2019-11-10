window.onload = function() {
// Заливаем ячейки таблицы в шахматном порядке:
var chessboard = document.getElementById("chessboard");
colorize(chessboard);

function colorize(obj) {
	var xPos, yPos;
	for (yPos = 0; yPos < obj.rows.length; yPos++) {
		for (xPos = 0; xPos < obj.rows[0].cells.length; xPos++) {
			if ((xPos + yPos) % 2) {
				obj.rows[yPos].cells[xPos].className = "darkCells";
			} else {
				obj.rows[yPos].cells[xPos].className = "lightCells";
			}
		}
	}
}
}