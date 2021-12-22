import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import Geolocation from '@react-native-community/geolocation';
import FAIcons from 'react-native-vector-icons/FontAwesome';

const API_KEY = "6d0dab065a05231a01cfd61e71406ba9";
const KELVIN = 273.15;
const Weather = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [temp, setTemp] = useState(null);
    const [tempMin, setTempMin] = useState(null);
    const [tempMax, setTempMax] = useState(null);
    const [tempFeelsLike, setFeelsLike] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        geoLocation();
    }, []);

    useEffect(() => {
        const json = getWeatherInfoAsync();
        console.log(json);
    }, [longitude]);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);
                setLatitude(latitude);
                setLogitude(longitude);
            },
            error => { console.log(error.code, error.message); },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        )
    }

    const getWeatherInfoAsync = async () => {
        let json;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr`
            );
            json = await response.json();
            console.log(json);
            if (json.cod == 200) {
                const wTemp = JSON.stringify(json.main.temp);
                const wTempMin = JSON.stringify(json.main.temp_min);
                const wTempMax = JSON.stringify(json.main.temp_max);
                const wName = JSON.stringify(json.name);
                const wTempFeelsLike = JSON.stringify(json.main.feels_like);

                setTemp(wTemp - KELVIN);
                setTempMin(wTempMin - KELVIN);
                setTempMax(wTempMax - KELVIN);
                setName(wName);
                setFeelsLike(wTempFeelsLike - KELVIN);

                if (json.weather != null) {
                    setWeatherIcon(json.weather[0].icon);
                    setWeatherDescription(json.weather[0].description);
                }
            }
        } catch (error) {
            console.error(error);
        }
        // console.log("after");
        return json;
    };


    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <View style={styles.weatherIconTempContainer}>
                    <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` }} resizeMode="contain" style={styles.weatherIconStyle} ></Image>
                    <Text style={styles.curTempTextStyle}>{Math.round(temp)}°</Text>
                    <Text style={styles.sideTextStyle}>{name}</Text>
                </View>

                <View style={styles.cityTempContainer}>
                    <TouchableOpacity onPress={geoLocation}>
                        <FAIcons on name="refresh" size={20} color={'#000'} />
                    </TouchableOpacity>
                    <View style={styles.cityTempStyle}>
                        <Text style={styles.sideTextStyle}>{weatherDescription}</Text>
                        <Text style={styles.sideTextStyle}>{Math.round(tempMax)}°/{Math.round(tempMin)}°</Text>
                        <Text style={styles.sideTextStyle}>체감 {Math.round(tempFeelsLike)}°C</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default Weather;

