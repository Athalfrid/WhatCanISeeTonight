import {Button, Pressable, TextInput, Text, View, SafeAreaView, ScrollView, StatusBar} from "react-native";
import styleSheet from "react-native-web/src/exports/StyleSheet";

export default function ListObjectToSee(){

    return(
        <View style={styleListObject.backgroundComponent}>
            <View style={styleListObject.filter}>
                <TextInput placeholder={'Vous recherchez ...'} accessibilityHint={'Votre recherche'} style={styleListObject.filterField}></TextInput>
                <Pressable style={styleListObject.btn}>
                    <Text>Rechercher</Text>
                </Pressable>
            </View>
            <View style={styleListObject.tableObjectContainer}>
                <SafeAreaView style={styleListObject.containerScrollView}>
                    <ScrollView style={styleListObject.scrollView}>
                        <Text style={styleListObject.textScrollView}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )

}
let styleListObject = styleSheet.create({
        backgroundComponent: {
            flex: 1,
            backgroundColor: 'yellow',
        },
        filterField : {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width:'70%'
        },
        filter : {
            flexDirection: 'row',
            backgroundColor: 'green',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight:6,
            paddingLeft:6
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
    containerScrollView:{
        paddingTop:StatusBar.currentHeight
    },
    scrollView:{
            backgroundColor:'lightblue',
            marginHorizontal:20
    },
    textScrollView:{
            fontSize:42
    },
    tableObjectContainer : {
        height:'95%'
    }

});
