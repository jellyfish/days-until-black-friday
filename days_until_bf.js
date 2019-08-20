var bfcm = new Date('November 29, 2019 00:00:00');
var seconds_in_a_day = 86400;
var days_to_display = null;
var displaying_weekdays = false;

function toggleCountMethod() {
	displaying_weekdays ? displayDays() : displayWeekdays();
	displaying_weekdays = !displaying_weekdays
}

function countDays() {
    difference_in_s = (bfcm - Date.now()) / 1000;
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
	displaying_weekdays ? displayWeekdays() : displayDays();
}

window.onload = function main() {
	setInterval(resetDisplay(), seconds_in_a_day/24);
}