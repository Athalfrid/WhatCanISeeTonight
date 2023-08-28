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

    let apiOpenMeteoBis =`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,cloudcover_low,cloudcover_mid,cloudcover_high&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin&forecast_days=1`;
    fetch(apiOpenMeteoBis)
        .then(
            (response)=> response.json()
        )
        .then((result) =>{
            setInfoMeteo(result)
            setCloudCover(()=>{
                const array = {'arrayHour':result.hourly.time,'arrayDataCloudCoverLow':result.hourly.cloudcover_low,'arrayDataCloudCoverMid':result.hourly.cloudcover_mid,'arrayDataCloudCoverHigh':result.hourly.cloudcover_high}
                let indexTab = array.arrayHour.indexOf(result.current_weather.time)
                let cloudCoverLow = array.arrayDataCloudCoverLow[indexTab]
                let cloudCoverMid = array.arrayDataCloudCoverMid[indexTab]
                let cloudCoverHigh = array.arrayDataCloudCoverHigh[indexTab]

                let div = addOrNotCloudCover(cloudCoverLow,cloudCoverMid,cloudCoverHigh)

                    console.log('______________')
                    console.log('div '+div)
                    console.log('Low '+cloudCoverLow)
                    console.log('Mid '+cloudCoverMid)
                    console.log('High '+cloudCoverHigh)
                    console.log('result '+((cloudCoverLow+cloudCoverMid+cloudCoverHigh)/div).toFixed(1))

                if(div > 0){
                    return ((cloudCoverLow+cloudCoverMid+cloudCoverHigh)/div).toFixed(1)
                }else{
                    return ((cloudCoverLow+cloudCoverMid+cloudCoverHigh)).toFixed(1)
                }

            })
           setInfoSun({'sunrise':formatDateToHour(result.daily.sunrise),'sunset':formatDateToHour(result.daily.sunset)})
        })
}

function addOrNotCloudCover(cldCoverLow,cldCoverMid,cldCoverHigh){
    let totalCloudCover = 0;
    if(cldCoverLow > 0){
        totalCloudCover += 1
    }
    if(cldCoverMid > 0){
        totalCloudCover += 1
    }
    if(cldCoverHigh > 0){
        totalCloudCover += 1
    }
    return totalCloudCover;
}

function formatDateToHour(dateToChange){
    const date = new Date(dateToChange);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}H${minutes.toString().padStart(2, '0')}`;
}

