//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2b5f80cf919d87f6c4d1df00e821cbad
let latitude = document.getElementById('latitude');
let longtitude = document.getElementById('longtitude');
let btn = document.getElementsByTagName('button')[0];
let country = document.getElementById('country');
let skyMain = document.getElementById('skyMain');
let skydescription = document.getElementById('skydescription');
let temp = document.getElementById('temp');
let Wind = document.getElementById('Wind');
let WindDeg = document.getElementById('WindDeg');
let Time = document.getElementById('Time');
let Pressure = document.getElementById('Pressure');

btn.addEventListener('click' , ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longtitude.value}&appid=2b5f80cf919d87f6c4d1df00e821cbad&lang=fa`).then((res)=>{
    
        return res.json();
    })
    .then((data)=>{
        console.log(data)
        country.textContent = data.name +"."+ data.sys.country
        temp.textContent = data.main.temp + " Kelvin"
        Pressure.textContent = data.main.pressure + " hPa"
        Wind.textContent = data.wind.speed + " meter/sec"
        WindDeg.textContent = data.wind.deg + " degrees (meteorological)"
        skydescription.textContent = data.weather[0].description
        skyMain.textContent = data.clouds.all + "%"
        Time.textContent = data.timezone + " Shift in seconds from UTC"
    })
})
