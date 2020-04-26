const https = require('https');
const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_token=pk.eyJ1IjoicHJpeWEyNG9ubmV0IiwiYSI6ImNrOHEzeGh0NTAwNXkzbHFnN2Fvd3NkMTIifQ.Nqy-GKnytSUjTDiQP5kNxA&limit=1';

const request =https.request(url,(responce)=>{
    //this callback call when data in
    let data='';
    responce.on('data', (chunk)=>{
       /// console.log(chunk.toString())
       data = data + chunk;
    })

    responce.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('An error: ' + error)
})


request.end();
