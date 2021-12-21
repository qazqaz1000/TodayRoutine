import React, {useState} from "react";
import {View, Text, Button} from "react-native";
import Geolocation from '@react-native-community/geolocation';
const API_KEY = "6d0dab065a05231a01cfd61e71406ba9";
const SecondScreen = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);
                console.log(position);
                console.log("lat : " + latitude);
                console.log("lon : " + longitude);
                setLatitude(latitude);
                setLogitude(longitude);
                const json = getMoviesFromApi();
                console.log("result json : " + json);
            },
            error => { console.log(error.code, error.message); },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 },
        )


    }

    const getMoviesFromApi = () => {
        console.log("before");
        let tt = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
        // console.log("after");
        return tt;
      };

    return (
        <View>
        <Text> latitude: {latitude} </Text>
            <Text> latitude: {latitude} </Text>
            <Text> latitude: {latitude} </Text>
            <Text> latitude: {latitude} </Text>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <Button title="Get GeoLocation" onPress={() => geoLocation()}> </Button>
        </View>
    )
}
export default SecondScreen;