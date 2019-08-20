var bfcm = new Date('November 29, 2019 00:00:00');
var seconds_in_a_day = 86400;
var days_to_display = null;
var displaying_weekdays = false;

function toggleCountMethod() {
	if (!displaying_weekdays) {
		setDisplay(countWeekDays())
		document.getElementById("days_until").innerHTML = "weekdays until Black Friday"
	} else {
		setDisplay(countDays())
		document.getElementById("days_until").innerHTML = "days until Black Friday"
	}
	displaying_weekdays = !displaying_weekdays
}

function countDays() {
    difference_in_s = (bfcm - Date.now()) / 1000;
    return Math.ceil(difference_in_s / seconds_in_a_day);
}

function countWeekDays() {
	return Math.ceil(countDays() * 5 / 7)
}

function setDisplay(text) {
	document.getElementById("countdown").innerHTML = text
}

window.onload = function main() {
	days_to_display = countDays();
	setInterval(setDisplay(days_to_display), seconds_in_a_day/24);
}