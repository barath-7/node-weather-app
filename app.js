require('dotenv').config()
const request = require('postman-request');
const {URL,GEOCODE_URL} = process.env


request({url:URL,json:true},(err,res)=>{
  let data = res.body
  if(err){
    console.log('Unable to access weather api')
    return
  }
  if(data.error){
    console.log('Unable to find location')
    return
  }
    
    console.log(
      `The weather today is ${data.current.weather_descriptions[0]}. 
      It is currently ${data.current.temperature} degrees out there. But it feels more like ${data.current.feelslike} degrees. 
      There is ${data.current.precip}% chance of rain.`
    );
})

request({url:GEOCODE_URL,json:true},(err,res)=>{

  let data = res.body
  if(err){
    console.log('Unable connect to geocoding api')
    return
  }
  if(data.features.length===0){
    console.log('Unable to find the latitude and longitude')
    return
  }
  let placeName = data.features[0].place_name
  let latitude = data.features[0].center[1]
  let longitude = data.features[0].center[0]
  console.log(`The coordinates of ${placeName} is ${latitude}, ${longitude}`)
})