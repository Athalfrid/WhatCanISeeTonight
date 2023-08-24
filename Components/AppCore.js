import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import WeatherComponent from "./AppCoreComponents/WeatherComponent";
import styleSheet from "react-native-web/src/exports/StyleSheet";

export default function AppCore({infoMeteo,setInfoMeteo}){

    return (
        <View style={styleApp.containerPrincipal}>
            <WeatherComponent
                infoMeteo={infoMeteo}
                setInfoMeteo={setInfoMeteo}/>
        </View>

    )
};

let styleApp = styleSheet.create({
    containerPrincipal:{
        height:'85%'
    },
    containerButton:{
        backgroundColor:'red'
    }

}

)
