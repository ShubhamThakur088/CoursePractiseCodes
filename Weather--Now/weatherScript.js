//let citySearch=document.getElementById('Input-Box').value;
//let searchBtn=document.getElementById('trigger-search');
let temperature=document.getElementById('cur-temp');
let region=document.getElementById('region');
let icon=document.getElementById('weather-icon');
let coord=document.getElementById('co-ordinates');
//let place=document.getElementById('place-name');
let data;

function weatherData()
{   
    let citySearch=document.getElementById('Input-Box').value;

    
    const api=`https://api.weatherapi.com/v1/current.json?key=7ad90ef3a535452ab8c110612211810&q=${citySearch}&aqi=no`;    
    fetch(api).
            then((response)=>response.json()).
            then((data)=>
            {
                console.log(data);
                temperature.textContent=`${data.current.temp_c}\u2103`;
                
                region.textContent=`${data.location.region}, ${data.location.name}`;
                
                coord.textContent=`${data.location.lat}\u00b0 ${data.location.lon}\u00b0`;
                let ico=`${data.current.condition.icon}`;
                console.log(ico);
                icon.src=ico;
                
            });   
 }
 

 

 








