import * as MyTools from "../../Tools/Tools";
import {useEffect, useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";

export default function WeatherComponent({infoMeteo,setInfoMeteo,coordinates,setCoordinates}){

    //const [coordinates,setCoordinates] = useState(MyTools.getCoordinates);
    const [city,setCity] = useState("")
    const [infoSun, setInfoSun] = useState({'sunrise':'','sunset':''})
    const [infoWind,setInfoWind] = useState({'cardinaleDirection':'','degresDirection':0})

    const[cloudCover,setCloudCover] = useState()

    useEffect(()=>{
        setCoordinates(MyTools.getCoordinates)

        setTimeout(()=> {
            MyTools.getClosestCity(coordinates,setCity)
            MyTools.getMeteo(setInfoMeteo,coordinates,setCloudCover,setInfoSun,setInfoWind)
        },500)

    },[])

    function reloadInfo() {
        setCoordinates(MyTools.getCoordinates)
        MyTools.getClosestCity(coordinates,setCity)
        MyTools.getMeteo(setInfoMeteo,coordinates,setCloudCover,setInfoSun,setInfoWind)
    }



    return (
        <View style={styleHeader.containerMeteo}>
            {infoMeteo ?
                <>
                <View style={styleHeader.containerInformation}>
                    <View style={styleHeader.containerLocation}>
                        <Text>📍 <Text style={styleHeader.gpsText}>{city}</Text></Text>
                    </View>

                    <View style={styleHeader.containerTemperature}>
                        <Text style={styleHeader.infoMeteo}>Température actuelle : {infoMeteo.current_weather.temperature}°C</Text>
                        <Text style={styleHeader.infoMeteo}>Couverture nuageuse par heure : {cloudCover} %</Text>
                        {infoMeteo &&
                            <View style={styleHeader.infoWeather}>
                                <Text style={styleHeader.infoSoleil}>🌬️ {infoWind.cardinaleDirection}     </Text>
                                <Text style={styleHeader.infoSoleil}>🌅 {infoSun.sunrise}     </Text>
                                <Text style={styleHeader.infoSoleil}>🌇 {infoSun.sunset}</Text>
                            </View>
                        }
                    </View>
                </View>

                <View style={styleHeader.containerBtn}>
                    <Pressable style={styleHeader.button} onPress={reloadInfo}>
                        <Text style={styleHeader.buttonText}>↻</Text>
                    </Pressable>
                </View>
                </>
                :
                <View style={styleHeader.waitInformation}>
                    <Text style={styleHeader.infoMeteo}>Chargement des informations</Text>
                </View>
            }
        </View>
    );
}

let styleHeader = StyleSheet.create({

    containerMeteo: {
        flexDirection:'row',
        height:100,
        justifyContent:'space-around',
        backgroundColor: 'black'
    },
    containerInformation: {
        flexDirection:'column',
        flex:5,
        justifyContent:'center'
    },
    containerBtn: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerLocation:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        margin:5,
    },
    containerTemperature:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        margin:5,
    },
    infoMeteo :{
        fontSize: 15,
        color: 'white',
        fontStyle:'italic',
        textAlign:'center'

    },
    infoWeather:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    infoSoleil:{
        fontSize: 12,
        color: 'white',
        textAlign:'center'
    },
    button :{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:40,
        height:40
    },
    buttonText:{
        fontSize:30,
        color:'black',
        textAlign:'center'

    },
    gpsText :{
        fontSize: 15,
        textDecorationLine:'underline',
        color: 'white',
        top: 0,
        fontStyle:'italic',
        textAlign:'center',
        margin:2,
        padding:2
    }, waitInformation: {
        flexDirection:'row',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black'
    },
    containerSunInformation: {
        flexDirection:'row'
    }

});