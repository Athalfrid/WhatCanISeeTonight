import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppCore from "./Components/AppCore";
import {useEffect, useState} from "react";

import imgBackGround from './assets/img/low-angle-shot-mesmerizing-starry-sky.jpg'

export default function App() {


    const [infoMeteo,setInfoMeteo] = useState();



  return (
    <View style={styles.container}>
      <Header/>
        <ImageBackground source={imgBackGround}>
      <AppCore
          infoMeteo={infoMeteo}
          setInfoMeteo={setInfoMeteo}
      />
        </ImageBackground>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
});
