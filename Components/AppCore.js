import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import WeatherComponent from "./AppCoreComponents/WeatherComponent";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import ListObjectToSee from "./AppCoreComponents/ListObjectToSee";
import * as MyTools from "../Tools/Tools";

export default function AppCore({infoMeteo,setInfoMeteo}){

    const [coordinates,setCoordinates] = useState(MyTools.getCoordinates);

    return (
        <View style={styleApp.containerPrincipal}>
            <WeatherComponent
                infoMeteo={infoMeteo}
                setInfoMeteo={setInfoMeteo}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
            />
            <ListObjectToSee
                coordinates={coordinates}
            />
        </View>

    )
};

let styleApp = styleSheet.create({
    containerPrincipal:{
        height:'92%'
    }

}

)
