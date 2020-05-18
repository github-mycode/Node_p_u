console.log('client side javascript file is loaded');

//async call
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
      response.json().then((data)=>{
          console.log(data);
      })
})

//http://localhost:3000/weather?address=pune

fetch('http://localhost:3000/weather?address=pune').then((response)=>{
      response.json().then((data)=>{
          if(data.error){
            console.log(data.error);
          }
          else{
            console.log(data);
          }
          
      })
})

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;
        console.log(location);
        document.querySelector('#error-msg').textContent = 'Loading...';
        if(location){
            const url = 'http://localhost:3000/weather?address='+encodeURIComponent(location);
            fetch(url).then((response)=>{
            response.json().then((data)=>{
            if(data.error){
                document.querySelector('#error-msg').textContent = data.error;
                document.querySelector('#location-msg').textContent = '';
                document.querySelector('#weather-description').textContent = '';
                document.querySelector('#temperature').textContent = '';
                document.querySelector('#weather-icon').src = '';
                document.querySelector('#humidity').textContent = '';
            }
            else{
                document.querySelector('#error-msg').textContent = '';
                document.querySelector('#location-msg').textContent = data.address;
                document.querySelector('#weather-description').textContent = data.weatherDescription;
                document.querySelector('#temperature').textContent = 'Temperature: '+data.temperature;
                document.querySelector('#weather-icon').src = data.weatherIcon;
                document.querySelector('#humidity').textContent = 'Humidity: '+data.humidity;
                
            }
          
      })
})
        }


})