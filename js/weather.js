const API_KEY = "50e858c8069c243a2095ce7e87d4555e";

const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const weatherIconImg = document.querySelector("#weatherIcon");

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
            .then(Response => Response.json()
            .then(data => {
                
                const weatherIcon = data.weather[0].icon;
                const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;   
                city.innerText = `${data.name}, `;
                weather.innerText = data.weather[0].main;
                weatherIconImg.setAttribute('src', weatherIconAdrs);
            })
        );
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);