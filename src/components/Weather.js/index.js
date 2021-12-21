import React, {useState} from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./styles";
import Geolocation from '@react-native-community/geolocation';

const API_KEY = "6d0dab065a05231a01cfd61e71406ba9";
const KELVIN = 273.15;
const Weather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [temp, setTemp] = useState(null);
    const [tempMin, setTempMin] = useState(null);
    const [tempMax, setTempMax] = useState(null);
    const [name, setName] = useState(null);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);
                // console.log(position);
                console.log("lat : " + latitude);
                console.log("lon : " + longitude);
                setLatitude(latitude);
                setLogitude(longitude);
                const json = getMoviesFromApi();
                console.log(json);
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
            console.log("hi");
            console.log(json);
            if(json.cod == 200){
            // const wIcon = json.weather;
            const wTemp = JSON.stringify(json.main.temp);
            const wTempMin = JSON.stringify(json.main.temp_min);
            const wTempMax = JSON.stringify(json.main.temp_max);
            const wName = JSON.stringify(json.name);

            setTemp(wTemp - KELVIN);
            setTempMin(wTempMin - KELVIN);
            setTempMax(wTempMax - KELVIN);
            setName(wName);

            if(json.weather != null){
                setWeatherIcon(json.weather[0].icon);
            }
            }

            
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
        // console.log("after");
        return tt;
    };

    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <Text> 현재온도 : {temp} </Text>
                <Text> 최저온도 : {tempMin} </Text>
                <Text> 최고온도 : {tempMax} </Text>
                <Text> 동네이름 : {name} </Text>
                <Button title="Get GeoLocation" onPress={() => geoLocation()}> </Button>
                <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` }} resizeMode="contain" style={styles.iconStyle} ></Image>
            </View>

        </View>
    );
}

export default Weather;

