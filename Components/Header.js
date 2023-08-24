import {Text, View,StyleSheet} from "react-native";

export default function Header(){

    return (
        <View style={styleHeader.container}>
            <Text style={styleHeader.title}>Que voir cette nuit ?</Text>
        </View>
    )
}

let styleHeader = StyleSheet.create({
    container :{
        backgroundColor: 'blue',
        height:'7%',
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