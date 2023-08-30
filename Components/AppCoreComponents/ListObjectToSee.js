import {
    Pressable,
    TextInput,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StatusBar, Button,
} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import * as MyTools from '../../Tools/Tools'
import {useEffect, useState} from "react";
import Planet from "./ElementList/Planet";

export default function ListObjectToSee({coordinates}){

    const [planets,setPlanets] = useState()


    useEffect(() => {
    MyTools.getPlanetPosition(setPlanets,coordinates);
    }, []);


    let reloadListPlanet =()=>{
        MyTools.getPlanetPosition(setPlanets,coordinates);
    };
    return(
        <View style={styleListObject.backgroundComponent}>
            <View style={styleListObject.filter}>
                <TextInput
                    placeholder={'Vous recherchez ...'}
                    placeholderTextColor={'white'}

                    accessibilityHint={'Votre recherche'}
                    style={styleListObject.filterField}></TextInput>
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
                    <View style={styleListObject.containerReload}>
                        <Pressable style={styleListObject.btnReload} onPressIn={reloadListPlanet}>
                            <Text>Recharger</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )

}
let styleListObject = styleSheet.create({
        backgroundComponent: {
            flex: 1,
            backgroundColor: 'black',
            margin:1,
            borderBottomWidth:1,
            borderLeftWidth:1,
            borderRightWidth:1,
            borderStyle:'dotted'
        },
        filterField : {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:'70%',
            borderBottomColor:'white',
            borderTopColor:'white',
            borderLeftColor:'white',
            borderRightColor:'white'
        },
        filter : {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight:6,
            paddingLeft:6,
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
    btnReload:{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:80,
        height:30
    },
    containerScrollView:{
            marginTop:2
    },
    scrollView:{
        backgroundColor:'black',
        marginHorizontal:10,
        padding:2
    },
    tableObjectContainer : {
        height:'80%'
    },
    containerReload:{
        justifyContent:'center',
        alignItems:'center',
        padding:2
    }

});
