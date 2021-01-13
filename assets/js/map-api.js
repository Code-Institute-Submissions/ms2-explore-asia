//CREDIT: GOOGLE MAP DOCUMENTATION USED TO IMPLEMENT FEATURES. LINK HERE: https://developers.google.com/maps/documentation

//Map showing SEA and 4 Locations on opening of site 
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom:3,
        center: {
            lat:2.2180,
            lng:115.6628
        }
    });


var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    { lat: 0.7893,lng: 113.9213 },
    { lat: 1.3521,lng: 103.8198 },
    { lat: 15.8700,lng: 100.9925 },
    { lat: 4.2105,lng: 101.9758 },
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

new MarkerClusterer (map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

}

// To move map to "Indonesia" on button click 
function initMapOne() {
  const indonesia = { lat: -7.5017, lng: 111.2578 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: indonesia,
  });
  const marker = new google.maps.Marker({
    position: indonesia,
    map: map,
  });
}

// To move map to "Singapore" on button click 
function initMapTwo() {
  const singapore = { lat: 1.3521, lng: 103.8198 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: singapore,
  });
  const marker = new google.maps.Marker({
    position: singapore,
    map: map,
  });
}

// To move map to "Thailand" on button click 
function initMapThree() {
  const thailand = { lat: 15.8700, lng: 100.9925 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: thailand,
  });
  const marker = new google.maps.Marker({
    position: thailand,
    map: map,
  });
}

// To move map to "Malaysia" on button click 
function initMapFour() {
  const malaysia = { lat: 4.2105, lng: 101.9758 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: malaysia,
  });
  const marker = new google.maps.Marker({
    position: malaysia,
    map: map,
  });
}

