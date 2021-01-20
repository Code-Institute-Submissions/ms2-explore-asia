// CREDIT API ENDPOINTS PROVIDED BY https://restcountries.eu/

//Indonesia Data
document.getElementById("indo-btn").addEventListener("click" , indonesiaData);

function indonesiaData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=id",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].nativeName;
        
    })

    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Singapore Data
document.getElementById("singapore-btn").addEventListener("click" , singaporeData);

function singaporeData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=sg",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[1].nativeName;
    })

    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Thailand Data
document.getElementById("thai-btn").addEventListener("click" , thailandData);

function thailandData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=th",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })

    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}
//Malaysia Data
document.getElementById("malaysia-btn").addEventListener("click" , malaysiaData);

function malaysiaData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=my",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json();

    })
    .then(json => {
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })

    .catch(error => {
        document.getElementById("country-name").innerHTML = "Sorry this information is not available right now. Please try again later."
    });

}

