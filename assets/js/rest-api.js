// CREDIT API ENDPOINTS PROVIDED BY https://restcountries.eu/

//Indonesia Data
function indonesiaData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=id",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json()

    })
    .then(json => {
        console.log(json);
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].nativeName;
        
    })

    .catch(error => {
        console.log("Something went wrong - error!");
        console.error(error);
    });

}
//Singapore Data
function singaporeData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=sg",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json()

    })
    .then(json => {
        console.log(json);
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[1].nativeName;
    })

    .catch(error => {
        console.log("Something went wrong - error!");
        console.error(error);
    });

}
//Thailand Data
function thailandData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=th",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json()

    })
    .then(json => {
        console.log(json);
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })

    .catch(error => {
        console.log("Something went wrong - error!");
        console.error(error);
    });

}
//Malaysia Data
function malaysiaData(){
    
    fetch("https://restcountries.eu/rest/v2/alpha?codes=my",
    {
        "method": "GET"
    })

    .then(response => {
        return response.json()

    })
    .then(json => {
        console.log(json);
        document.getElementById("capital-text").innerHTML = json[0].capital;
        document.getElementById("currency-text").innerHTML = json[0].currencies[0].name;
        document.getElementById("population-text").innerHTML = json[0].population;
        document.getElementById("language-text").innerHTML = json[0].languages[0].name;
    })

    .catch(error => {
        console.log("Something went wrong - error!");
        console.error(error);
    });

}

