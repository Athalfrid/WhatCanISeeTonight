import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import WeatherComponent from "./AppCoreComponents/WeatherComponent";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import ListObjectToSee from "./AppCoreComponents/ListObjectToSee";

export default function AppCore({infoMeteo,setInfoMeteo}){

    return (
        <View style={styleApp.containerPrincipal}>
            <WeatherComponent
                infoMeteo={infoMeteo}
                setInfoMeteo={setInfoMeteo}/>
            <ListObjectToSee/>
        </View>

    )
};

let styleApp = styleSheet.create({
    containerPrincipal:{
        height:'87%'
    },
    containerButton:{
        backgroundColor:'red'
    }

}

)
