// import { app } from "../server";
// import express from "express";
/* Global Variables */
const apiKey = "e9ea78562fb9c139f2b7cf9392df8330";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Create a new date instance dynamically with JS
let d = new Date();
// +1 in date because getDate() in is in range (0-11)
let currentDate = (d.getMonth()+1) + "." + d.getDate() + "." + d.getFullYear();

getData=("/weather-data", async (zipCode) => {
    try {
        const apiCall = `${baseURL}${zipCode}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiCall);
        const weatherdata =await response.json();
        return weatherdata.main.temp;
    } catch (err) {
        console.log(err);
    }
});

postData=async(url,weatherdata)=>{
    try{
    const res=await fetch(url,{
        method:"POST",
        credentials:"same-origin",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(weatherdata),
    });
    const newData=await res.json();
    return newData;
}catch(er){
    console.log(er);
}

}
const RetrieveData=async()=>{
    
    try{
        const request= await fetch('/weather-data')
        const allData=await request.json();
        console.log(allData)
        return allData;
    }
    catch(er){
        console.log(er);
    }
}

const performAction = async(e) => {
    const zipCode = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    const fetchWeather=await getData(zipCode);
    postData("/add",{fetchWeather,currentDate,feelings})
    updateUI();
    //RetrieveData();
    
};
document.getElementById("generate").addEventListener("click", performAction);

const updateUI=async()=>{
    const{fetchWeather,currentDate,feelings}=await RetrieveData();
    document.getElementById('temp').textContent=`weather is ${fetchWeather} degrees`;
    document.getElementById('date').textContent=`date is ${currentDate}`;
    document.getElementById('content').textContent=`I'm feeling ${feelings}`;
}



