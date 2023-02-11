# Weather-Journal App Project

# Overview
this project is to get tempreture from openweather api
i adjsuted the server for post, get with URls /add , /weather-data accordingly
and added the listening method to insure server is running on npm start
i added package nodemon to not have to restart the server and re run on every save
## APP.js
i created global variables apiKey and base url and it will be written in url in broweswe only needing the zipcode that will be entered later. 
Also created global variable for date, but the month is always 1 even though it is feburary (2), after research i discoverd that get month ranged from (0-11) not (1-12) so i added +1.

first the event listener will get values of zipcode, feelings, and will sbd them with the global variable current date and route("/add"). to postData.
after we wait for /weather-data (getData) which will call api thorugh adding baseURL,zipcode,"&units=metric&appid=",and my personal apiKey.
i tested this URL mutliple time with browser and tested how the data is retrived before calling it nativley with URL
after then we will await the fetch and weather data to be done
and return the temp from inside main from the retrived data.

to retrieve data i call method retrve data and it will await route.weather-data and the jsone alldata to be requested then return alldata
finally update UI is called and it will await retrieveData to be done requesting and setting the data in variable allData, then using text content to write the output.qqq


