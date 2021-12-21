import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Weather from "../../components/Weather.js";

const SecondScreen = () => {


    return (
        <SafeAreaView>
            <View>
                <Weather></Weather>
            </View>
        </SafeAreaView>
  
    )
}
export default SecondScreen;