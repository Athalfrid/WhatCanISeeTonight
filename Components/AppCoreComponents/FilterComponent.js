import {View, Text} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";
import { BlurView } from 'expo-blur';

export default function FilterComponent(){

    return(
        <BlurView
            style={styleFilter.containerAffichageFiltre}
            blurType="light"
            blurAmount={10}
        >
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
            <Text style={styleFilter.text}>Test</Text>
        </BlurView>
    )

}

const styleFilter = styleSheet.create({
    containerAffichageFiltre:{
        position: 'absolute',
        top: '10%',
        margin:10,
        padding:10,
        height:'auto',
        width:'95%',
        zIndex: 1
    },
    text: {
        color:'white'
    },
    btnOpenCloseFilter:{
        color: 'white',
        backgroundColor:'#aeb5bf',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        borderRadius:6,
        width:25,
        height:25
    }
    }
)