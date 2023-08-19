import * as Location from 'expo-location'

export const getCoordinates = (setCoordinates) => {
    Location.installWebGeolocationPolyfill()
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCoordinates({'longitude': longitude,'latitude':latitude})
            },
            (error) => {
                console.error("Error getting coordinates:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}

export function getMeteo(setInfoMeteo,coordinates,setIsMeteoLoaded) {
    let apiInfoClimat = `https://www.infoclimat.fr/opendata/?method=get&format=json&stations[]=000UC&start=2023-08-18&end=2023-08-18&token=KOm36MOTofZLJEpFCW4j6T77VLigCdkBMSJ3cMH7C4nJbqSQJg`;

    let apiMeteoMatics = `https://api.meteomatics.com/2023-08-18T00:00:00ZP1D:PT1H/t_2m:C,relative_humidity_2m:p/47.4245,9.3767/html?model=mix`

    let apiOpenMeteo = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=cloudcover&current_weather=true&forecast_days=1`;

    fetch(apiOpenMeteo)
        .then(
            (response)=> response.json()
        )
        .then((result) =>{
            setInfoMeteo(result)
            setIsMeteoLoaded([{'reponse': true, 'message': 'Météo chargée'}])
        })
        .then((error) =>{
            if(error){
                setIsMeteoLoaded([{'reponse':false,'message':'Erreur, Météo non chargée'}])
            }
        })


}