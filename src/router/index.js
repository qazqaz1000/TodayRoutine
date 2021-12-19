import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStackNav from "./HomeStackNav";

const RootStack = createNativeStackNavigator();

const Router = () => (
    <RootStack.Navigator initialRouteName='RootHome'>
        <RootStack.Screen name={"RootHome"} component={BottomHomeNavigator}
            options={{
                headerShown: false,
            }}></RootStack.Screen>
        <RootStack.Screen
            name="Story"
            component={StoryScreen}
            options={{
                headerShown: false,
                title: '정보'
            }}
        />
    </RootStack.Navigator>
)

export default Router;