import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppCore from "./Components/AppCore";
import {useEffect, useState} from "react";
import * as Location from "expo-location";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AppCore/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
});
