let apiKey="ba61741edb7b6ad6db801b7396e5f0e9"
let submit=document.getElementById("btn")
let loc=document.getElementById("city-name")
let temp=document.getElementById("city-temperature")
let wind=document.getElementById("city-windspeed")
let humid=document.getElementById("city-humid")
let pressure=document.getElementById("city-pressure")
submit.onclick=()=>{
    let city=document.getElementById("location").value
    fetchWeather(city)
}
function fetchWeather(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    let p=fetch(url)
    p.then((response)=>{
          return response.json()
    }).then((value)=>{
         console.log(value)
         loc.innerHTML=`City : ${city}`
         temp.innerHTML=`Temperature :  ${value.main.temp}`
         wind.innerHTML=`Windspeed  :  ${value.wind.speed}`
         humid.innerHTML=`Humidity :  ${value.main.humidity}`
         pressure.innerHTML=`pressure :  ${value.main.pressure}`
    })
}