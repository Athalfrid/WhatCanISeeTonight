import {View, Text, Pressable, Image, TouchableHighlight} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import {useState} from "react";
import {DynamicImageComponent} from "../../../Tools/Tools";


export default function Planet({planet}){

    const [afficherDetails,setAfficherDetails] = useState(false)
    const [isPress,setIsPress] = useState(false)

    const planetName = planet.name.toLowerCase()

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'blue',
        style: afficherDetails ? stylePlanetObject.buttonPress : stylePlanetObject.button,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => afficherdetail(),
    };


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
            <TouchableHighlight  {...touchProps}>
                <Text>{!afficherDetails ? `Plus d'informations` : 'Fermer'}</Text>
            </TouchableHighlight >
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
        width:150,
        height:25
    },
    buttonPress :{
        color: 'black',
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
        width:'100%'

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