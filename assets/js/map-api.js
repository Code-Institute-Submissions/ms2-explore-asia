//CREDIT: GOOGLE MAP DOCUMENTATION USED TO IMPLEMENT FEATURES. LINK HERE: https://developers.google.com/maps/documentation

//Map showing SEA and 4 Locations on opening of site 
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 2.2180,
            lng: 115.6628
        }
    });


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: -7.5017, lng: 111.2578 },
        { lat: 1.3521, lng: 103.8198 },
        { lat: 15.8700, lng: 100.9925 },
        { lat: 4.2105, lng: 101.9758 },
    ];
}

// To move map to "Indonesia" on button click 

document.getElementById("indo-btn").addEventListener("click", initMapOne)

function initMapOne() {
    const indonesia = { lat: -7.5017, lng: 111.2578 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: indonesia,
    });
    const marker = new google.maps.Marker({
        position: indonesia,
        map: map,
    });
}

// To move map to "Singapore" on button click 
document.getElementById("singapore-btn").addEventListener("click", initMapTwo)

function initMapTwo() {
    const singapore = { lat: 1.3521, lng: 103.8198 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: singapore,
    });
    const marker = new google.maps.Marker({
        position: singapore,
        map: map,
    });
}

// To move map to "Thailand" on button click 
document.getElementById("thai-btn").addEventListener("click", initMapThree)

function initMapThree() {
    const thailand = { lat: 15.8700, lng: 100.9925 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: thailand,
    });
    const marker = new google.maps.Marker({
        position: thailand,
        map: map,
    });
}

// To move map to "Malaysia" on button click 
document.getElementById("malaysia-btn").addEventListener("click", initMapFour)

function initMapFour() {
    const malaysia = { lat: 4.2105, lng: 101.9758 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: malaysia,
    });
    const marker = new google.maps.Marker({
        position: malaysia,
        map: map,
    });
}
// WHAT TO SEE SECTION

document.getElementById("indo-map").addEventListener("click", initMapFive)

document.getElementById("indo-map").addEventListener("click", function() {
  document.getElementById("indo-text").innerHTML = 
  "<h1>Restaurants:</h1> <br> <li>A: Sani Sini</li> <li>B: Saigon San</li> <li>C: Fullfeel Cafe</li> <h1>Attractions:</h1> <br> <li>D: Prambanan Temple</li> <li>E: Mount Bromo</li>"
});

function initMapFive() {

    var indoMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: -7.5017,
            lng: 111.2578
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: -6.1936, lng: 106.8238 }, // sana sini jakarta
        { lat: -7.9769, lng: 112.6330  }, // saigon san malang
        { lat: -8.6525, lng: 115.1312 }, // fullfeel canggu bali 
        { lat: -7.7520, lng: 110.4915}, // prambanan temple yogja 
        { lat: -7.9425, lng: 112.9530}, // mt bromo java 

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(indoMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
 