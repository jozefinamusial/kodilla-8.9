var height = 15;

function rysujChoinke (x) {	

	for (var i = 1 ; i-1 < x ; i++) {
		var star = '';
		for(var n = 0 ; n < x-i; n++) {
			star += ' ';
		}
		for (var j = 0 ; j <= i*2-2 ; j++) {
			star += '*';
		}
		console.log(star);
	}
}

rysujChoinke(height);