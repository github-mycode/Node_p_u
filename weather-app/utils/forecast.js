const request = require('request');
const forecast = (location, callcack) => {
//try to use  weather stack=> http://apu.weatherstack.com/current?access_key-- -- 
    const url ='http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(location)+'&appid=35949062f7f32bda2a9f29a40d5dbfde&units=metric';
    
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callcack('Unable to connect with internet.', undefined);
        }
        else if(response.body.cod == "400" || response.body.cod == "401"){
            callcack(response.body.message, undefined);
        }
        else{
            callcack(undefined, {
                    temperature: response.body.main.temp,
                    rain: response.body.main.rain
            });
        }
    })
    
    
    }

    const forecastS = (location, callcack) => {

            const url ='http://api.weatherstack.com/current?access_key=0ea087b80baed31a52774c18e00c02ed&query='+encodeURIComponent(location);
            
            request({url: url, json: true}, (error, response)=>{
                if(error){
                    callcack('Unable to connect with internet.', undefined);
                }

                else{
                    //console.log(response.body);
                    callcack(undefined, {
                        location: response.body.location.name,
                        weather: response.body.current.weather_descriptions,
                        weatherIcons: response.body.current.weather_icons,
                        humidity: response.body.current.humidity
                    });
                }
            })
            
            
            }
    module.exports = {
        forecast: forecast,
        forecastS: forecastS
    }