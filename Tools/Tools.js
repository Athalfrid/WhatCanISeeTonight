import * as Location from 'expo-location'

export const getCoordinates = (setLongitude,setLatitude) => {
    Location.installWebGeolocationPolyfill()
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (error) => {
                console.error("Error getting coordinates:", error.message);
            }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}