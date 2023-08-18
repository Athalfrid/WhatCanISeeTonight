import {Text, View,StyleSheet} from "react-native";

export default function Header(){


    return (
        <View style={styleHeader.container}>
            <Text>What can I see tonight ?</Text>
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
    }
});