import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeBottomTabNav from "./HomeBottomTabNav";
import SecondScreen from "../screens/SecondScreen";
import { View, Text} from "react-native";
import HomeScreen from "../screens/HomeScreen";

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Router = () => (
    <RootStack.Navigator initialRouteName='RootHome'>
        <RootStack.Screen name={"RootHome"} component={HomeBottomTabNav}
            options={{
                headerShown: false,
            }}></RootStack.Screen>
        <RootStack.Screen
            name="Story"
            component={SecondScreen}
            options={{
                headerShown: false,
                title: '정보'
            }}
        />
    </RootStack.Navigator>

)

export default Router;