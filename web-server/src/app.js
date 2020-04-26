const express = require('express');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')
const path = require('path')
const app = express();

const hbs = require('hbs')

const port =3010;

//define path for express config
const viewsPath = path.join(__dirname, '../templates/views') 
const publicDirPath = path.join(__dirname, '..','public');
const partialsPath = path.join(__dirname, '../templates/partials') 
//C:\My Code\Node U\web-server\src
// console.log(__dirname)

// //remove one folder name from path
// console.log(path.join(__dirname, '..','..','..'))
// console.log(path.join(__dirname, '..','public'))

// //C:\My Code\Node U\web-server\src\app.js
// console.log(__filename)

//npm install hbs
//setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



//setup static directory to server
//http://localhost:3000/index.html we can call
app.use(express.static(publicDirPath))

// app.get('/',(req, res)=>{
//     res.send('Hello world')
// })


app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'priya',
    })
})


//app.com
//app.com/help
//app.about

// app.get('/help', (req, res)=>{
//     res.send('Help Page')
// }
// )

// app.get('/about', (req, res)=>{
//     // res.send([{
//     //     name: 'priya',
//     //     age: 24
//     // },
//     // {
//     //     name: 'Ishant',
//     //     age: 25
//     // }])

//     res.send('<h2>About me</h1>')
// }
// )



app.get('/help',(req, res)=>{
res.render('help',{
    app_name: 'weather App variable',
    title:'Help'
})
})

app.get('/about',(req, res)=>{
res.render('about',{
    title: 'About Me',
    name: 'priya',
})
})


app.get('/weather', (req, res)=> {
   // res.send('<h1>Show Weather</h1>')

   if(!req.query.address){
       res.send(
           {
               error: 'Please provide address in the URL'
           }
       )
   }
    var location = req.query.address
    var action = req.query.action
    if(action == 'forecast'){
    forecast.forecast(location, (error, {temperature, rain}) => {      
       if(error){
           res.send({
               error: error
           })
       }
       res.send({
        temperature: temperature,
        rain: rain
       })
    })
    }
    else{
        geocode.geocode(location,(error, {latitude, longitude, location})=>{
        if(error){
           res.send({
               error: error
           })
       }
        res.send({
        error: error,
        latitude: latitude,
        longitude: longitude,
        location: location
       })
    })
    }
})

app.get('/product', (req, res)=> {
//req.query.[name]

if(!req.query.search){
    res.send({
        error: 'you must provide search'
    })
}
   res.send(req.query)
})


app.get('help/*', (req, res)=>{
    //res.send('help Articals not found')
    res.render('error', {
        message: 'help Articals not',
        title: '404 Error found'
    })
})

app.get('about/*', (req, res)=>{
   // res.send('about Articals not found')
       res.render('error', {
        message: 'about Articals not found',
        title: '404 Error found'
    })
})

app.get('*', (req, res)=>{
    //res.send('My 404 Error')
        res.render('error', {
        message: 'My 404 Error',
        title: '404 Error found'
    })
})

app.listen(port, ()=>{
    console.log('Write on console..');
})