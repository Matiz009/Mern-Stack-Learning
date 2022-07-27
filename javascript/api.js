function initMap() {
  let location = { lat: -45.234, lng: 234.654 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  let marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
