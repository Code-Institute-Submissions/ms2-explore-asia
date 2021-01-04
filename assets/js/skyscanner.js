function indonesiaFlights() {
fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IE/EUR/en-IE/DUB-sky/CGK-sky/anytime?inboundpartialdate=anytime" + "/", 
{
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9f09761f52msh6f8fac8b58fb932p1ea85djsn3b59b484eb98",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
	}
})
// CREDIT: CODE FROM https://developers.google.com/web/updates/2015/03/introduction-to-fetch AND MODIFIED TO SUIT THIS PROJECT
.then (async function (response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
      }

    try {
        const data = await response.json();
        document.getElementById("flight-data").innerHTML = data.Quotes;
        console.log(data);
    }
    catch (err) {
        console.error(err);
    }
});
}



