import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import * as MyTools from '../Tools/Tools'
import * as Location from "expo-location";

export default function Header({coordinates}){

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [infoMeteo,setInfoMeteo] = useState();

    return (
        <View style={styleHeader.container}>
            <Text style={styleHeader.title}>My AppCore</Text>
                <View>
                    <Button style={styleHeader.gps} title={"Localisation"} onPress={MyTools.getCoordinates(setLongitude,setLatitude)}></Button>
                </View>
            <View>
                <Text>{longitude}</Text>
                <Text>{latitude}</Text>
            </View>
            <Button title={"Mes Favoris"}></Button>
            <Button title={"Rechercher"}></Button>
        </View>
    )
}

let styleHeader = StyleSheet.create({
    container :{
        backgroundColor: 'red',
        height:'83%',
    },
    title :{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        top: 0,
        textAlign: 'center',
    },
    infoMeteo :{
        fontSize: 15,
        color: 'white',
        top: 0,
        fontStyle:'italic',
        textAlign:'center'
    },
    gps :{
        fontSize: 15,
        color: 'white',
        top: 0,
        fontStyle:'italic',
        textAlign:'center'
    }
});