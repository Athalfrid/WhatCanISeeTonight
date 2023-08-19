import * as MyTools from "../../Tools/Tools";
import {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import * as Location from "expo-location";

export default function WeatherComponent(){

    const [coordinates,setCoordinates] = useState({'longitude':0,'latitude':0})

    const [infoMeteo,setInfoMeteo] = useState({});
    const [isMeteoLoaded,setIsMeteoLoaded] = useState([{'reponse': false, 'message': "Erreur, Météo non chargée au lancement"}]);



    useEffect(() => {
        if(!isMeteoLoaded){
            MyTools.getMeteo(setInfoMeteo,coordinates,setIsMeteoLoaded)
        }
        console.log(isMeteoLoaded)
        console.log('weatherComponent : \n')
        console.log(infoMeteo)
    },[]);

    return (
        <View>
            <View>
                <Button style={styleHeader.gps} title={"Où suis-je ?"} onClick={MyTools.getCoordinates(setCoordinates)}></Button>
            </View>
            <View style={styleHeader.containerMeteo}>
                <Text style={styleHeader.gpsText}>Longitude : {coordinates.longitude}</Text>
                <Text style={styleHeader.gpsText}>Latitude : {coordinates.latitude}</Text>

            </View>
        </View>
    );
}

let styleHeader = StyleSheet.create({

    infoMeteo :{
        fontSize: 150,
        color: 'black',
        top: 0,
        fontStyle:'italic',
        textAlign:'center'
    },
    gps :{
        width:24,
        fontSize: 15,
        color: 'white',
        top: 0,
        fontStyle:'italic',
        textAlign:'center'
    },
    gpsText :{
        fontSize: 15,
        color: 'white',
        top: 0,
        fontStyle:'italic',
        textAlign:'center'
    },
    containerMeteo: {
        flexDirection:'row',
        height:'100%',
        justifyContent:'space-around',
        backgroundColor: 'black'
    }
});