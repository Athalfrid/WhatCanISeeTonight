import {Text, View,StyleSheet} from "react-native";

export default function Header(){


    return (
        <View style={styleHeader.container}>
            <Text>PUB</Text>
        </View>
    )
}

let styleHeader = StyleSheet.create({
    container :{
        backgroundColor: 'green',
        height:'5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:24
    }
});