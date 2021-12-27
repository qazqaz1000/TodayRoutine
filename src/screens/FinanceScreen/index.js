import React, {useState} from "react";
import {View, Text, Button, SafeAreaView, 
    useColorScheme} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

import Finance from "../../components/Finance";


const FinanceScreen = () => {
    console.log(useColorScheme())
    const isDarkMode = useColorScheme() === 'dark';

    // const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //   };
      const backgroundStyle = {
        backgroundColor: Colors.darker,
      };
    
  

    return (
        <SafeAreaView>
            <View style={backgroundStyle}>
                <Finance theme={backgroundStyle.backgroundColor} ></Finance>
            </View>
        </SafeAreaView>
  
    )
}
export default FinanceScreen;