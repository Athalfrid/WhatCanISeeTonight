import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppCore from "./Components/AppCore";
import {useEffect, useState} from "react";

export default function App() {


    const [infoMeteo,setInfoMeteo] = useState();



  return (
    <View style={styles.container}>
      <Header/>
      <AppCore
          infoMeteo={infoMeteo}
          setInfoMeteo={setInfoMeteo}
      />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
});
