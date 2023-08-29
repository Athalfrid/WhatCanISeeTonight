import {View, Text, Pressable} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";


export default function Planet({planet}){

    return (
        <View style={stylePlanetObject.baseContainer}>
            <View style={stylePlanetObject.containerPresentation}>
                <Text>{planet.name}</Text>
                {planet.alt > 0 ?
                    <Text>👀</Text>
                    :
                    <Text>😴</Text>
                }
            </View>
            <View style={stylePlanetObject.buttonContainer}>
                <Pressable style={stylePlanetObject.button}>
                    <Text>🔎</Text>
                </Pressable>
            </View>
        </View>
    )
}

let stylePlanetObject = styleSheet.create({
    baseContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height:80,
        borderWidth:2,
        borderStyle:'dashed',
        margin:2,
        padding:5
    },
    button :{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:40,
        height:40
    },
    containerPresentation:{

    },
    buttonContainer:{

    }
})