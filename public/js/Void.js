var latitude = 0;
var longitude = 0;
var map;

if ("geolocation" in navigator) {
  console.log("Bruh i know where you @ now")
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log("latitude: " + latitude);
    console.log("longitude: " + longitude);

    document.getElementById("height").innerHTML = latitude;
    document.getElementById("lenght").innerHTML = longitude;

    kartta = L.map('map').setView([latitude, longitude], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);

  });

} else {
  console.log("Ayo where tf you @")
}
