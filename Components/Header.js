import {Text, View,StyleSheet} from "react-native";

export default function Header(){

    return (
        <View style={styleHeader.container}>

        </View>
    )
}

let styleHeader = StyleSheet.create({
    container :{
        height:'0%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:24
    },
    title :{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        top: 0,
        textAlign: 'center',
    }
});