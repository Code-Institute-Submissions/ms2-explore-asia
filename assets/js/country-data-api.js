// CREDIT API ENDPOINTS PROVIDED BY https://restcountries.eu/

//Indonesia Data
// Add event listener
document.getElementById("indo-btn").addEventListener("click" , indonesiaData);

function indonesiaData(){
// Make fetch call
    fetch("https://restcountries.eu/rest/v2/alpha?codes=id",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();
// Display data
    })
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].nativeName;
        
    })
// User message for if API fails / error
    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Singapore Data
// Add event listener
document.getElementById("singapore-btn").addEventListener("click" , singaporeData);

function singaporeData(){
// Make fetch call
    fetch("https://restcountries.eu/rest/v2/alpha?codes=sg",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
// Display data
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[1].nativeName;
    })
// User message for if API fails / error
    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Thailand Data
// Add event listener
document.getElementById("thai-btn").addEventListener("click" , thailandData);

function thailandData(){
// Make fetch call
    fetch("https://restcountries.eu/rest/v2/alpha?codes=th",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
// Display data
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })
// User message for if API fails / error
    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Malaysia Data
// Add event listener
document.getElementById("malaysia-btn").addEventListener("click" , malaysiaData);

function malaysiaData(){
// Make fetch call
    fetch("https://restcountries.eu/rest/v2/alpha?codes=my",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
// Display data
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })
// User error message for if API fails / error
    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}

