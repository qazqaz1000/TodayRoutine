import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FDicons from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import HomeStackScreen from './home.routes';
import HomeStackNav from "./HomeStackNav";
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
const Tab = createBottomTabNavigator();

const HomeBottomTabNav = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({

    //   headerStyle: {
    //     height: 40, // Specify the height of your custom header
    //   },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          return <FDicons name="home" size={size} color={color} />;
        }
        if (route.name === "Discovery") {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === "Post") {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === "Notifications") {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === "Profile") {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
      title:false,
      headerShown:false,
    })}
  >
    <Tab.Screen name="Home" component={HomeStackNav} />
    <Tab.Screen name="Discovery" component={SecondScreen} initialParams={{test:1}}/>
    <Tab.Screen name="Post" component={SecondScreen} initialParams={{test:2}} />
    <Tab.Screen name="Notifications" component={HomeScreen} />
    <Tab.Screen name="Profile" component={About} />
  </Tab.Navigator>

)

export default HomeBottomTabNav;