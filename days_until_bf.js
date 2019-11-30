var black_friday = new Date('November 29, 2019 00:00:00');
var black_friday_end =  new Date('November 29, 2019 23:59:59');

var cyber_monday = new Date('December 02, 2019 00:00:00');
var cyber_monday_end = new Date('December 02, 2019 23:59:59');

var seconds_in_a_day = 86400;
var days_to_display = null;
var displaying_weekdays = false;

var allow_toggle = false;

function toggleCountMethod() {
	if (!allow_toggle) {
		return;
	}
	displayDaysUntil(black_friday, displaying_weekdays)
	displaying_weekdays = !displaying_weekdays;
}

function time_is_between_datetimes(d1, d2) {
	now = Date.now();
	above_lower_bound = d1 < now;
	below_upper_bound = now < d2;
	return above_lower_bound && below_upper_bound;
}

function today_is_black_friday() {
	return time_is_between_datetimes(black_friday, black_friday_end)
}

function countdown_to_cyber_monday() {
	return time_is_between_datetimes(black_friday_end, cyber_monday)
}

function today_is_cyber_monday() {
	return time_is_between_datetimes(cyber_monday, cyber_monday_end)
}

function countDaysUntil(day) {
	difference_in_s = (day - Date.now()) / 1000;
	return Math.ceil(difference_in_s / seconds_in_a_day);
}

function countWeekDaysUntil(day) {
	return Math.ceil(countDaysUntil(day) * 5 / 7);
}

function displayDaysUntil(day, only_weekdays) {
	count = only_weekdays ? countWeekDaysUntil(day) : countDaysUntil(day)
	document.getElementById("countdown").innerHTML = count;
	unit_text = only_weekdays ? "weekday" : "day"
	plurality = count == 1 ? "" : "s"
	day_text = day == cyber_monday ? "Cyber Monday" : "Black Friday"
	document.getElementById("days_until").innerHTML = `${unit_text}${plurality} until ${day_text}`;
}

function resetDisplay() {

	allow_toggle = false;
	countdown_element = document.getElementById("countdown");
	sub_text_element = document.getElementById("days_until")
	if (today_is_black_friday()) {
		launch_fireworks();
		countdown_element.classList.add("its_black_friday");
		countdown_element.innerHTML = "It’s Black Friday!";
		sub_text_element.style.display = "none"
	}
	else if (countdown_to_cyber_monday()) {
		displayDaysUntil(cyber_monday, displaying_weekdays)
		countdown_element.classList.add("countdown");
	}
	else if (today_is_cyber_monday()) {
		jack_into_the_matrix();
		countdown_element.classList.add("its_cyber_monday");
		countdown_element.innerHTML = "It’s Cyber Monday!";
		sub_text_element.style.display = "none"
	}
	else {
		allow_toggle = true;
		displayDaysUntil(black_friday, displaying_weekdays)
		countdown_element.classList.add("countdown");
	}
}

window.onload = function main() {
	setInterval(resetDisplay(), seconds_in_a_day/24);
}