import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import WeatherComponent from "./AppCoreComponents/WeatherComponent";
import {createSheet} from "react-native-web/src/exports/StyleSheet/dom";
import styleSheet from "react-native-web/src/exports/StyleSheet";

export default function Header(){
    return (
        <View style={styleApp.containerPrincipal}>
            <WeatherComponent/>
            <View style={styleApp.containerButton}>
                <Button title={"Rechercher"}></Button>
                <Button title={"Mes Favoris"}></Button>
            </View>
        </View>

    )
};

let styleApp = styleSheet.create({
    containerPrincipale:{
        flex:1
    },
    containerButton:{
        backgroundColor:'red'
    }

}

)
