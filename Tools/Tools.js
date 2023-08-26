import * as Location from 'expo-location'




export function getCoordinates ()  {
    const coordonnee = {'longitude':0,'latitude':0}
    Location.installWebGeolocationPolyfill()
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                 coordonnee.longitude = position.coords.longitude;
                 coordonnee.latitude = position.coords.latitude
            },
            (error) => {
                console.error("Error getting coordinates:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }

    return coordonnee;
}

export function getClosestCity(coordinates,setCity){
    let city ="";

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
        .then(
            (response)=>response.json()
        )
        .then(
            (result)=>{
                setCity(result.address.city_district)
            }
        )
}

export function getMeteo(setInfoMeteo,coordinates,setCloudCover,setInfoSun) {

    let apiOpenMeteo = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=cloudcover&current_weather=true&forecast_days=1`;
    let apiOpenMeteoBis =`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,cloudcover&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&forecast_days=1`;
    fetch(apiOpenMeteoBis)
        .then(
            (response)=> response.json()
        )
        .then((result) =>{
            setInfoMeteo(result)
            setCloudCover(()=>{
                const array = {'arrayHour':result.hourly.time,'arrayDataCloudCover':result.hourly.cloudcover}
                return array.arrayDataCloudCover[array.arrayHour.indexOf(result.current_weather.time)];
            })
           setInfoSun({'sunrise':formatDateToHour(result.daily.sunrise),'sunset':formatDateToHour(result.daily.sunset)})
        })
}

function formatDateToHour(dateToChange){
    const date = new Date(dateToChange);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}H${minutes.toString().padStart(2, '0')}`;
}