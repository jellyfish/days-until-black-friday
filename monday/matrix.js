function canvasSupport(e) {
	return !!e.getContext;
}

function jack_into_the_matrix() {
	var canvas = document.getElementById('canvas');
	document.getElementById('countdown').style.color = '#00ff00';
	document.getElementById('days_until').style.color = '#00ff00';

	if (!canvasSupport(canvas)) {
		return; 
	}

	var ctx = canvas.getContext('2d');
	var w = canvas.width = window.innerWidth;
	var h = canvas.height = window.innerHeight;
	var yPositions = Array(300).join(0).split('');

	// resize
	window.onresize = function() {
		w = canvas.width = window.innerWidth;
		h = canvas.height = window.innerHeight;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	function runMatrix() {
		if (typeof Game_Interval != 'undefined') clearInterval(Game_interval);
		Game_Interval = setInterval(drawScreen, 50);
	}

	function drawScreen () {
		ctx.fillStyle = 'rgba(0,0,0,.05)';
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle = '#0b0';
		px = 10
		ctx.font = `${px}px Noto Sans JP`;
		yPositions.map(function(y, index) {
			char_code_start = 19984 // 丐 http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
			char_code_range = 80 // Choose from the next 80 chars
			text = String.fromCharCode(char_code_start + Math.random() * char_code_range);
			x = (index * px);
			ctx.fillText(text, x, y);

			if (y > (h * 0.6) + Math.random() * (h*10)) {
				yPositions[index] = 0; // Reset
			} else {
				yPositions[index] = y + px; // move it down the canvas
			}
		})
	}
	runMatrix();
}