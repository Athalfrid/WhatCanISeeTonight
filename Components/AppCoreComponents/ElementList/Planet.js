import {View, Text, Pressable, Image} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import {useState} from "react";
import {DynamicImageComponent} from "../../../Tools/Tools";


export default function Planet({planet}){

    const [afficherDetails,setAfficherDetails] = useState(false)

    const planetName =planet.name.toLowerCase()


    let afficherdetail = () => {
        setAfficherDetails(!afficherDetails)
    };
    return (
        <View style={stylePlanetObject.containerPlanet}>
            <View style={stylePlanetObject.baseContainer}>
                <View style={stylePlanetObject.containerPresentation}>
                    <Text style={stylePlanetObject.titleObject}>{planet.name}</Text>
                    <DynamicImageComponent imageName={planetName}/>
                </View>
            </View>
        {afficherDetails &&
            <View>
                <Text style={stylePlanetObject.descriptionObject}>Constellation : {planet.const}</Text>
                <Text style={stylePlanetObject.descriptionObject}>Altitude : {planet.alt}</Text>
            </View>
        }
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Pressable style={stylePlanetObject.button} onPressIn={afficherdetail}>
                <Text>{!afficherDetails ? 'Détails' : 'Fermer'}</Text>
            </Pressable>
        </View>
        </View>
    )
}

let stylePlanetObject = styleSheet.create({
    containerPlanet:{
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'white',
        padding:10,
        margin:2
    },
    baseContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height:80
    },
    button :{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:60,
        height:25
    },
    containerPresentation:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:5,
        padding: 5,
        width:'100%',
        backgroundColor: 'black'

    },
    titleObject:{
        fontWeight:'bold',
        fontSize:18,
        color:'white'
    },
    descriptionObject:{
        fontSize: 12,
        color:'white'

    },
    detailsObject:{
        fontStyle:'italic',
    },
    styleImg:{
        width:50,
        height:50
    }
})