import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Exchange from "../../components/Exchange/index.js";
import Finance from "../../components/Finance/index.js";
import Weather from "../../components/Weather.js";

const SecondScreen = () => {


    return (
        <SafeAreaView>
            <View >
                <Weather ></Weather>
                <Exchange></Exchange>
                <Finance></Finance>
            </View>
        </SafeAreaView>
  
    )
}
export default SecondScreen;