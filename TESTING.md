# Testing 

## Code Validity 

### HTML

When I initially ran my HTML through the Validity Checker found [here](https://validator.w3.org/), it returned an error on line 87. The error was due to a H1 tag having no content. 
The reason the H1 tag had no content was due to it being targeted by an event listener and text being added at that point. To ensure my HTML 
is vaild, I added a span with the class of "hidden" to add content to the H1 to ensure the error was resolved. By doing this, it allowed my code 
to function as intended also. 

![HTML Validity](testingmd-images/html-validity.png)

### CSS 

I ran my CSS through the W3C CSS Validator found [here](https://jigsaw.w3.org/css-validator/), this returned no issues. 

![CSS Validity](testingmd-images/css-validity.png)

### Javascript 

For Javascript I used JSHint, found [here](https://jshint.com/) I ran each JS file seperately and these were the results for each. 

* Email Js File ![Email Js](testingmd-images/email-js-testing.png)

* Image Change Js File ![Image Change Js](testingmd-images/image-change-testing.png) This showed a missing semi colon which I added in to the file.

* Map API Js File ![Map API JS](testingmd-images/map-testing-one.png) A majority of this code was used from Google Map documentation and adapted for the project. The 
things being highlighted regarding variables are from Google's documentation on how to use their code. 

* Rest API Js File ![Rest API Js](testingmd-images/rest-api-testing.png) This showed several missing semi colons, I added these to the file. The screenshot is 
after the semi-colons were added.

* Skyscanner Js File ![Skyscanner Js](testingmd-images/skyscanner-testing.png) As seen this showed 4 missing semi colons, I added these to the file. 

### User Stories Testing 

#### User 

* "I want to learn about countries in Asia, specifically about the languages or population." This requirement is met through the use of the REST Countries API 
data. This tells the user key facts about each country. 
![User Stories One](testingmd-images/testing-userstories.png)
* "I would like to be able to look for flights while visiting the website." This requirement is met through the use of the Skyscanner API, while this is simple
currently it does provide the user with the option of two different flights. 
![User Stories Two](testingmd-images/testing-userstories2.png)
* "I want to be able to find social media links, for further information." The social media links are accessible in the footer. 
![User Stories Three](testingmd-images/testing-userstories3.png)
* "I want to use a map to see recommendations for where to eat. I want to use a map to see recommendations of things to see." These are both met by choosing a country 
and being shown recommended Restaurants and Attractions. While the text is visible the map is also showing markers of these locations. 
![User Stories Four](testingmd-images/testing-userstories4.png)

#### Site Owner 

* "I want to provide useful, factual information to the user." All information shown is relevent and factual. The user can find out key facts, look for places to see, places 
to eat and find out some of the flight options. 
* "I want the site to be easy to use and aesthetically pleasing." The userface is simple and easy to use. It's clear what is expected of the user. The information is easy to find, 
the buttons ensure interactivity for the user. While keeping the design simple it ensures there isn't an overload of design / features that may be overwhelming or confusing to a user.
* "I want to ensure to include an option to look for flights, this benefits me as businesses may collaborate with me to generate sales." By implementing the Skyscanner API this goal has been 
achieved. In time this as mentioned could be developed further allowing more information to be accepted or displayed. 
#### Returning User

* "I want to be able to contact the site owner incase I require further information." The Email function allows the user to send an email and recieve feedback when the email is 
successful. 

### Project Barriers And Solutions / Bugs

* During the testing process I submitted my project to "Peer Review" in the Slack community. From doing this one thing noted was that when the user clicked a navigational option the nav bar was 
covering the start of the section chosen including the section header. This was fixed by adding extra margin-top to each section. 
* During this another student noted that in the "flight section" the results of "direct flight" return "true or false" and asked if this was intentional. To clarify this, the API I worked with 
only returns a true or false value for this data.
* I noticed that intermittently when clicking the "flight section" buttons the user may recieve the change of inner html text that indicates an error within the API. This issue was occuring because
the target within the array may not be available on that day in question. For example I may have chosen to display the data of "Quote 12" but there may some days only be 3 quotes available. It depends
on what information and flights are available at that time. To help minimise the risk of this I reduced the target within the array, any quotes above 3 are no longer requested as this is more likely to 
return the error. 

### Internal Links 

I checked when implemented that the footer icons open the correct social media site in a new window when clicked. I also checked this in my "flight section", that the link to book flights opens Skyscanner
in a new window. Testing was successful for both of these. 

### Responsiveness and Individual Feautures Testing 
![one](testingmd-images/testing-one.png)
![two](testingmd-images/testing-two.png)
![three](testingmd-images/testing-three.png)
![four](testingmd-images/testing-four.png)
![five](testingmd-images/testing-five.png)
![six](testingmd-images/testing-six.png)
![seven](testingmd-images/testing-seven.png)
![eight](testingmd-images/testing-eight.png)
![nine](testingmd-images/testing-nine.png)
![ten](testingmd-images/testing-ten.png)
![eleven](testingmd-images/testing-eleven.png)
![eleven](testingmd-images/testing-twelve.png)

