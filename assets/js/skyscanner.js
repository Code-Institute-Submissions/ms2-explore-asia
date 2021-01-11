//CREDIT: ENDPOINTS PROVIDED BY RAPID API. 
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
        .then(json => {
            console.log(json);
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers").innerHTML = JSON.stringify(json.Carriers);
            document.getElementById("places").innerHTML = json.Places[0].Name;
            document.getElementById("quotes").innerHTML = JSON.stringify(json.Quotes);
        })
        .catch(error => {
            console.log("Something went wrong - error!");
            console.error(error);
        });
}

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
        .then(json => {
            console.log(json);
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers").innerHTML = JSON.stringify(json.Carriers);
            document.getElementById("places").innerHTML = JSON.stringify(json.Places);
            document.getElementById("quotes").innerHTML = JSON.stringify(json.Quotes);
        })
        .catch(error => {
            console.log("Something went wrong - error!");
            console.error(error);
        });
}

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
        .then(json => {
            console.log(json);
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers").innerHTML = JSON.stringify(json.Carriers);
            document.getElementById("places").innerHTML = JSON.stringify(json.Places);
            document.getElementById("quotes").innerHTML = JSON.stringify(json.Quotes);
        })
        .catch(error => {
            console.log("Something went wrong - error!");
            console.error(error);
        });

}

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
        .then(json => {
            console.log(json);
            document.getElementById("text-change").innerHTML = "Find Out Below:";
            document.getElementById("carriers").innerHTML = JSON.stringify(json.Carriers);
            document.getElementById("places").innerHTML = JSON.stringify(json.Places);
            document.getElementById("quotes").innerHTML = JSON.stringify(json.Quotes);
        })
        .catch(error => {
            console.log("Something went wrong - error!");
            console.error(error);
        });

}



