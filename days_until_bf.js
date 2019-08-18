window.onload = function countDays() {
    var bfcm = new Date('November 29, 2019 00:00:00');
    var difference_in_s = (bfcm - Date.now()) / 1000;
    var seconds_in_a_day = 86400;
    var days = Math.ceil(difference_in_s / seconds_in_a_day);
    document.getElementById("days_until").innerHTML = days
}
