var black_friday = new Date('November 29, 2019 00:00:00');
var black_friday_upper =  new Date('November 29, 2019 23:59:59');

var cyber_monday = new Date('December 02, 2019 00:00:00');
var cyber_monday_upper = new Date('December 02, 2019 23:59:59');

var seconds_in_a_day = 86400;
var days_to_display = null;
var displaying_weekdays = false;

function today_is_black_friday() {
	now = Date.now();
	above_lower_bound = black_friday < now;
	below_upper_bound = now < black_friday_upper;
	return above_lower_bound && below_upper_bound;
}

function toggleCountMethod() {
	displaying_weekdays ? displayDays() : displayWeekdays();
	displaying_weekdays = !displaying_weekdays;
}

function countDays() {
	difference_in_s = (black_friday - Date.now()) / 1000;
	return Math.ceil(difference_in_s / seconds_in_a_day);
}

function displayDays() {
	document.getElementById("countdown").innerHTML = countDays();
	document.getElementById("days_until").innerHTML = "days until Black Friday";
}

function countWeekDays() {
	return Math.ceil(countDays() * 5 / 7);
}

function displayWeekdays() {
	document.getElementById("countdown").innerHTML = countWeekDays();
	document.getElementById("days_until").innerHTML = "weekdays until Black Friday";
}

function resetDisplay() {
	if (today_is_black_friday()) {
		launch_fireworks();

		element = document.getElementById("countdown");
		element.classList.add("its_black_friday");
		element.innerHTML = "It's Black Friday!";

		document.getElementById("days_until").style.display = "none"
	} else {
		displaying_weekdays ? displayWeekdays() : displayDays();
		document.getElementById("canvas").style.display = "none"
	}
}

window.onload = function main() {
	setInterval(resetDisplay(), seconds_in_a_day/24);
}