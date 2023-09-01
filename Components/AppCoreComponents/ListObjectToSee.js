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
import FilterComponent from "./FilterComponent";

export default function ListObjectToSee({coordinates}){

    const [planets,setPlanets] = useState()
    const [searchPlanet,setSearchPlanet] = useState("")

    const [showFilter,setShowFilter] = useState(false)

    function showHiddFilter() {
        setShowFilter(!showFilter)
    }


    useEffect(() => {
    MyTools.getPlanetPosition(setPlanets,coordinates);
    }, []);


    let reloadListPlanet =()=>{
        MyTools.getPlanetPosition(setPlanets,coordinates);
    };


    function handelSearch(event) {
        setSearchPlanet(event.nativeEvent.text)
    }

    return(
        <View style={styleListObject.backgroundComponent}>
            <View style={styleListObject.filter}>
                <TextInput
                    placeholder={'Chercher ...'}
                    placeholderTextColor={'white'}
                    onChange={handelSearch}
                    accessibilityHint={'Votre recherche'}
                    style={styleListObject.filterField}></TextInput>
                <Pressable style={styleListObject.btnOpenCloseFilter} onPress={showHiddFilter}>
                    <Text style={styleListObject.textBtnFilter}>Filtrer</Text>
                </Pressable>
            </View>
            {showFilter &&
                <FilterComponent/>
            }
            <View style={styleListObject.tableObjectContainer}>
                <SafeAreaView style={styleListObject.containerScrollView}>
                    <ScrollView style={styleListObject.scrollView}>
                        { planets &&
                            planets
                                .filter((planet)=>{
                                    return planet.name.toLowerCase().includes(searchPlanet.toLowerCase())
                                })
                                .map((planet)=>{
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
        margin:1,
        zIndex:0
    },
    filterField : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:'65%',
        borderBottomColor:'white',
        borderTopColor:'white',
        borderLeftColor:'white',
        borderRightColor:'white',
        color:'white'
    },
    filter : {
        flexDirection: 'row',
        justifyContent: 'center',
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
        marginHorizontal:10,
        padding:2
    },
    tableObjectContainer : {
        height:'90%'
    },
    containerReload:{
        justifyContent:'center',
        alignItems:'center',
        padding:2
    },
    text: {
        color:'white',
    },
    textBtnFilter: {
        color:'white',
        textAlign:'center'
    },
    btnOpenCloseFilter:{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:60,
        height:25
    }

});
