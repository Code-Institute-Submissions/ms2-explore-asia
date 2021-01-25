//CREDIT: ENDPOINTS PROVIDED BY RAPID API. 
// Add event listener
document.getElementById("indo-flights").addEventListener("click" , indonesiaFlights);
// Fetch request 
function indonesiaFlights() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/CGK-sky/anytime?inboundpartialdate=anytime",
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "9f09761f52msh6f8fac8b58fb932p1ea85djsn3b59b484eb98",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        })

        .then(response => {
            return response.json();
        })
// Display results
        .then(json => {
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers-one").innerHTML = json.Carriers[0].Name;
            document.getElementById("carriers-two").innerHTML = json.Carriers[1].Name;
            document.getElementById("from-one").innerHTML = json.Places[1].CityName;
            document.getElementById("from-two").innerHTML = json.Places[1].CityName;
            document.getElementById("to-one").innerHTML = json.Places[0].CityName;
            document.getElementById("to-two").innerHTML = json.Places[0].CityName;
            document.getElementById("quotes-one").innerHTML = json.Quotes[0].MinPrice;
            document.getElementById("quotes-two").innerHTML = json.Quotes[1].MinPrice;
            document.getElementById("direct-one").innerHTML = json.Quotes[0].Direct;
            document.getElementById("direct-two").innerHTML = json.Quotes[1].Direct;
        })
// Error message for user if API fails 
        .catch(error => {
            document.getElementById("text-change").innerHTML = "Sorry this information isn't available right now. Please try again later"
        });
}
// Add event listener
document.getElementById("sing-flights").addEventListener("click" , singaporeFlights);
// Make fetch request
function singaporeFlights() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/SIN-sky/anytime?inboundpartialdate=anytime", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9f09761f52msh6f8fac8b58fb932p1ea85djsn3b59b484eb98",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })

        .then(response => {
            return response.json();
        })
// Display results
        .then(json => {
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers-one").innerHTML = json.Carriers[0].Name;
            document.getElementById("carriers-two").innerHTML = json.Carriers[1].Name;
            document.getElementById("from-one").innerHTML = json.Places[0].CityName;
            document.getElementById("from-two").innerHTML = json.Places[0].CityName;
            document.getElementById("to-one").innerHTML = json.Places[1].CityName;
            document.getElementById("to-two").innerHTML = json.Places[1].CityName;
            document.getElementById("quotes-one").innerHTML = json.Quotes[0].MinPrice;
            document.getElementById("quotes-two").innerHTML = json.Quotes[3].MinPrice;
            document.getElementById("direct-one").innerHTML = json.Quotes[0].Direct;
            document.getElementById("direct-two").innerHTML = json.Quotes[3].Direct;
        })
// Error message for user if API fails 
        .catch(error => {
            document.getElementById("text-change").innerHTML = "Sorry this information isn't available right now. Please try again later"
        });
}
// Add event listener
document.getElementById("thai-flights").addEventListener("click" , thailandFlights);
// Fetch request
function thailandFlights() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/BKK-sky/anytime?inboundpartialdate=anytime", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9f09761f52msh6f8fac8b58fb932p1ea85djsn3b59b484eb98",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            return response.json();
        })
// Display results
        .then(json => {
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers-one").innerHTML = json.Carriers[0].Name;
            document.getElementById("carriers-two").innerHTML = json.Carriers[3].Name;
            document.getElementById("from-one").innerHTML = json.Places[1].CityName;
            document.getElementById("from-two").innerHTML = json.Places[1].CityName;
            document.getElementById("to-one").innerHTML = json.Places[0].CityName;
            document.getElementById("to-two").innerHTML = json.Places[0].CityName;
            document.getElementById("quotes-one").innerHTML = json.Quotes[0].MinPrice;
            document.getElementById("quotes-two").innerHTML = json.Quotes[12].MinPrice;
            document.getElementById("direct-one").innerHTML = json.Quotes[0].Direct;
            document.getElementById("direct-two").innerHTML = json.Quotes[0].Direct;
        })
// Error message for user if API fails 
        .catch(error => {
            document.getElementById("text-change").innerHTML = "Sorry this information isn't available right now. Please try again later"
        });

}
// Add event listener
document.getElementById("malay-flights").addEventListener("click" , malaysiaFlights);
// Fetch request
function malaysiaFlights() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/KUL-sky/anytime?inboundpartialdate=anytime", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9f09761f52msh6f8fac8b58fb932p1ea85djsn3b59b484eb98",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    })

        .then(response => {
            return response.json();
        })
// Display data
        .then(json => {
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers-one").innerHTML = json.Carriers[0].Name;
            document.getElementById("carriers-two").innerHTML = json.Carriers[1].Name;
            document.getElementById("from-one").innerHTML = json.Places[0].CityName;
            document.getElementById("from-two").innerHTML = json.Places[0].CityName;
            document.getElementById("to-one").innerHTML = json.Places[1].CityName;
            document.getElementById("to-two").innerHTML = json.Places[1].CityName;
            document.getElementById("quotes-one").innerHTML = json.Quotes[0].MinPrice;
            document.getElementById("quotes-two").innerHTML = json.Quotes[9].MinPrice;
            document.getElementById("direct-one").innerHTML = json.Quotes[0].Direct;
            document.getElementById("direct-two").innerHTML = json.Quotes[9].Direct;
        })
// Error message for user if API fails 
        .catch(error => {
            document.getElementById("text-change").innerHTML = "Sorry this information isn't available right now. Please try again later"
        });

}



