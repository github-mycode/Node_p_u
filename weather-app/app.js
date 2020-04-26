///npm init - y to ignore all
//const request = require('request');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')
// const url ='http://api.openweathermap.org/data/2.5/weather?q=pune&appid=35949062f7f32bda2a9f29a40d5dbfde&units=metric';

// //by passing json:true response will convert into json 
// request({url: url, json: true}, (error, response)=>{
//     //const data = JSON.parse(response);
//     if(error){
//         console.log('error: '+ error);
//     }
//     else if(response.body.cod == "400" || response.body.cod == "401"){
//         console.log(response.body.message)
//     }
//     else{
//         console.log('It is currently '+ response.body.main.temp+ 'there is '+ response.body.main.rain + '% chance of rain');
//     }
// })

// //GeoCording

// const geoCordingUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJpeWEyNG9ubmV0IiwiYSI6ImNrOHEzeGh0NTAwNXkzbHFnN2Fvd3NkMTIifQ.Nqy-GKnytSUjTDiQP5kNxA&limit=1';

// //by passing json:true response will convert into json 
// request({url: geoCordingUrl, json: true}, (error, response)=>{
//     if(error){
//         console.log('error: '+ error);
//     }
//     else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length === 0){
//         console.log("Location not found.")
//     }
//     else{
//         console.log(response.body.features.length);
//         console.log('Lat:  '+ response.body.features[0].center[0]+ ' long: '+ response.body.features[0].center[1]);
//     }

// })




// const geocode = (address,callback)=>{
//     const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicHJpeWEyNG9ubmV0IiwiYSI6ImNrOHEzeGh0NTAwNXkzbHFnN2Fvd3NkMTIifQ.Nqy-GKnytSUjTDiQP5kNxA&limit=1';
//     request({url: url, json: true},(error, response)=> {
//         if(error){
//             callback('Unable to connect to location services', undefined)
//         }
//         else if(response.body.features.length ===0){
//             callback('unable to find location. Try another search.', undefined)
//         }
//         else{
//             callback(undefined,{
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }

//     })
// }


//

// Goal: Create a reusable function for getting the forecast

//

// 1. Setup the "forecast" function in utils/forecast.js

// 2. Require the function in app.js and call it as shown below

// 3. The forecast function should have three potential calls to callback:

//    - Low level error, pass string for error

//    - Coordinate error, pass string for error

//    - Success, pass forecast string for data (same format as from before)


console.log(process.argv);
var location = process.argv[2];

if(location == 'ssd'){

    forecast.forecastS(location, (error, {location, weather, weatherIcons, humidity}) => {

        console.log('Error', error)
        console.log('location: ', location)
        console.log('weather: ', weather)
        console.log('weatherIcons: ', weatherIcons)
        console.log('humidity: ', humidity)
      })

    forecast.forecast(location, (error, {temperature, rain}) => {

        console.log('Error', error)
      
        //console.log('Data', data)
        console.log('temperature: ', temperature)
      
        console.log('rain: ', rain)

      })

    geocode.geocode(location,(error, {latitude, longitude, location})=>{
        console.log('Error: ' + error);
        //console.log('Data: '+ JSON.stringify(data));
        console.log('latitude: ', latitude)
      
        console.log('longitude: ', longitude)
        console.log('location: ', location)
    })
}
