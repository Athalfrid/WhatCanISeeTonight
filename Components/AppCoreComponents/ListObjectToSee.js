import {
    Button,
    Pressable,
    TextInput,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import * as MyTools from '../../Tools/Tools'
import {useEffect, useState} from "react";
import Planet from "./ElementList/Planet";
import {Magnetometer} from "expo-sensors";

export default function ListObjectToSee({coordinates}){

    const [planets,setPlanets] = useState()


    useEffect(() => {
    MyTools.getPlanetPosition(setPlanets,coordinates);
    }, []);




    return(
        <View style={styleListObject.backgroundComponent}>
            <View style={styleListObject.filter}>
                <TextInput placeholder={'Vous recherchez ...'} accessibilityHint={'Votre recherche'} style={styleListObject.filterField}></TextInput>
                <Pressable style={styleListObject.btn}>
                    <Text>Rechercher</Text>
                </Pressable>
            </View>
            <View style={styleListObject.tableObjectContainer}>
                <SafeAreaView style={styleListObject.containerScrollView}>
                    <ScrollView style={styleListObject.scrollView}>
                        { planets &&
                            planets.map((planet)=>{
                                return (<Planet
                                    key={planet.id}
                                    planet={planet}
                                />)
                            })
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )

}
let styleListObject = styleSheet.create({
        backgroundComponent: {
            flex: 1,
            backgroundColor: 'yellow',
        },
        filterField : {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:'70%'
        },
        filter : {
            flexDirection: 'row',
            backgroundColor: 'green',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight:6,
            paddingLeft:6
        },
    btn:{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:80,
        height:40
    },
    containerScrollView:{
        paddingTop:StatusBar.currentHeight
    },
    scrollView:{
        backgroundColor:'lightblue',
        marginHorizontal:20,
        padding:2
    },
    tableObjectContainer : {
        height:'85%'
    }

});
