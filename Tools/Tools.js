import * as Location from 'expo-location'
import { View, Image } from 'react-native';

export function getPlanetPosition(setPlanets,coordinates) {
    const apiForPlanets = `https://www.astropical.space/api-ephem.php?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;

    fetch(apiForPlanets)
        .then((response)=>response.json())
        .then((result)=>{
            setPlanets(result.response)
        })

}


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

export function getMeteo(setInfoMeteo,coordinates,setCloudCover,setInfoSun,setInfoWind) {

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

                return div > 0 ?  ((cloudCoverLow+cloudCoverMid+cloudCoverHigh)/div).toFixed(1) : ((cloudCoverLow+cloudCoverMid+cloudCoverHigh)).toFixed(1)
            })
           setInfoSun({'sunrise':formatDateToHour(result.daily.sunrise),'sunset':formatDateToHour(result.daily.sunset)})
            setInfoWind({'cardinaleDirection':getWindDirection(result.current_weather.winddirection),'degresDirection':result.current_weather.winddirection})
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

function getWindDirection(wind){
    const directions = ['N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE', 'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW'];
    const index = Math.round(wind / 22.5) % 16;
    return directions[index];

}

export const DynamicImageComponent = ({ imageName }) => {
    // Mapping entre les noms d'images et les ressources importées
    const imageMapping = {
        venus: require('../assets/img/planetes_transparents/venus.png'),
        mercury: require('../assets/img/planetes_transparents/mercury.png'),
        mars: require('../assets/img/planetes_transparents/mars.png'),
        jupiter: require('../assets/img/planetes_transparents/jupiter.png'),
        saturn: require('../assets/img/planetes_transparents/saturn.png'),
        uranus: require('../assets/img/planetes_transparents/uranus.png'),
        neptune: require('../assets/img/planetes_transparents/neptune.png'),
        pluto: require('../assets/img/planetes_transparents/pluto.png'),

        // Ajoutez plus d'images au besoin
    };

    // Vérifiez si le nom de l'image passé correspond à une ressource
    if (imageMapping[imageName]) {
        return <Image source={imageMapping[imageName]} style={{ width: 85, height: 85 }} />;
    } else {
        return <View>Image introuvable</View>;
    }
};