// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
//require cors
const cors = require("cors");

//require body parser
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static("website"));

//get route
//GET function callback
const getAll = (req, res) => res.send(projectData);
app.get("/weather-data", getAll);


//get route
app.post("/add", (req,res)=>{
    projectData={...req.body};
    res.send(projectData);
});


// Setup Server
const port = 3000;

//looging port number for debug porpuse
function listening() {
    console.log("server running");
    console.log(`running on PORT: ${port}`);
}
app.listen(port,listening);
// export default{app};