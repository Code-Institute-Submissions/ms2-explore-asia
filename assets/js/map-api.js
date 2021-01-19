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

document.getElementById("indo-btn").addEventListener("click", initMapOne);

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
document.getElementById("singapore-btn").addEventListener("click", initMapTwo);

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
document.getElementById("thai-btn").addEventListener("click", initMapThree);

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
document.getElementById("malaysia-btn").addEventListener("click", initMapFour);

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
// Indonesia
document.getElementById("indo-map").addEventListener("click", initMapFive);

document.getElementById("indo-map").addEventListener("click", function() {
  document.getElementById("indo-text").innerHTML = 
  "<h1>Restaurants:</h1><li>A: Sani Sini</li> <li>B: Saigon San</li> <li>C: Fullfeel Cafe</li> <h1>Attractions:</h1><li>D: Prambanan Temple</li> <li>E: Mount Bromo</li>";
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
        { lat: -6.1936, lng: 106.8238 }, // Sana Sini Jakarta
        { lat: -7.9769, lng: 112.6330  }, // Saigon San Malang
        { lat: -8.6525, lng: 115.1312 }, // Fullfeel Canggu Bali 
        { lat: -7.7520, lng: 110.4915}, // Prambanan Temple Yogja 
        { lat: -7.9425, lng: 112.9530}, // Mt Bromo Java 

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

//Singapore
document.getElementById("sing-map").addEventListener("click", initMapSix);

document.getElementById("sing-map").addEventListener("click", function() {
  document.getElementById("sing-text").innerHTML = 
  "<h1>Restaurants:</h1><li>A: Burnt Ends</li> <li>B: Corner House </li> <li>C: Chinatown Food Street </li> <h1>Attractions:</h1><li>D: Marina Bay Sands</li> <li>E: Gardens By The Bay</li>";
});


function initMapSix() {

    var singMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 1.3521,
            lng: 103.8198
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 1.2805, lng: 103.8418 }, // Burnt Ends
        { lat: 1.3150, lng: 103.8154  }, // Corner house
        { lat: 1.2823, lng: 103.8440 }, // Chinatown Food Street
        { lat: 1.2847, lng: 103.8610}, // Marina Bay Sands 
        { lat: 1.2816, lng: 103.8636}, // Gardens by the bay 

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(singMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Thailand
document.getElementById("thai-map").addEventListener("click", initMapSeven);

document.getElementById("thai-map").addEventListener("click", function() {
  document.getElementById("thai-text").innerHTML = 
  "<h1>Restaurants:</h1><li>A: Mu's Katsu</li> <li>B: Siam Supper Club</li> <li>C: Red Sky Bar</li> <h1>Attractions:</h1><li>D: Pattaya Floating Market</li> <li>E: Chiang Mai Night Bazaar</li>";
});

function initMapSeven() {

    var thaiMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 15.8700,
            lng: 100.9925
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 18.7966, lng: 98.9656 }, // Mu's Katsu
        { lat: 7.9948, lng: 98.3059  }, // Siam Supper Club
        { lat: 13.7480, lng: 100.5387 }, // Red Sky Bar
        { lat: 12.8684, lng: 100.9043}, // Pattaya Floating Market
        { lat: 18.7853, lng: 99.0003}, // Chiang Mai Night Bazaar

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(thaiMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Malaysia
document.getElementById("malay-map").addEventListener("click", initMapEight);

document.getElementById("malay-map").addEventListener("click", function() {
  document.getElementById("malay-text").innerHTML = 
  "<h1>Restaurants:</h1><li>A: Burger On 16</li> <li>B: My Own Cafe</li> <li>C: Eat Street</li> <h1>Attractions:</h1><li>D: Petronas Towers</li> <li>E: Batu Caves</li>";
});

function initMapEight() {

    var malayMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 4.2105,
            lng: 101.9758
        }
    
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 3.1414, lng: 101.7094 }, // Burger On 16
        { lat: 5.4152, lng:  100.3368 }, // My Own Cafe
        { lat: 3.1459, lng:  101.7090}, // Eat Street
        { lat: 3.1579, lng: 101.7120}, // Petronas Towers
        { lat: 3.2379, lng: 101.6840 }, // Batu Caves

    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(malayMap, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

// To clear text content on btn click 
document.getElementById("indo-map").addEventListener("click", function() {
    document.getElementById("sing-text").innerHTML = "" , 
    document.getElementById("thai-text").innerHTML = "",
    document.getElementById("malay-text").innerHTML = "";
});

document.getElementById("sing-map").addEventListener("click", function() {
    document.getElementById("indo-text").innerHTML = "" , 
    document.getElementById("thai-text").innerHTML = "",
    document.getElementById("malay-text").innerHTML = "";
});

document.getElementById("thai-map").addEventListener("click", function() {
    document.getElementById("indo-text").innerHTML = "" , 
    document.getElementById("sing-text").innerHTML = "",
    document.getElementById("malay-text").innerHTML = "";
});

document.getElementById("malay-map").addEventListener("click", function() {
    document.getElementById("indo-text").innerHTML = "" , 
    document.getElementById("sing-text").innerHTML = "",
    document.getElementById("thai-text").innerHTML = "";
});


