import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { getWeatherInfoAsync } from "../Utils";


//https://finance.naver.com/item/item_right_ajax.naver?type=recent&code=005930&page=1

const Exchange = () => {

    useEffect(() =>{
        console.log('use effect');
        func();
    }, [])

    const func = () => {
        console.log();
        // const result = getWeatherInfoAsync(`https://finance.naver.com/item/item_right_ajax.naver?type=recent&code=005930&page=1`);
        const result = getWeatherInfoAsync(`https://api.manana.kr/exchange/rate/KRW/USD.json`);
        console.log(result);
    }

    return (
        <View>
            <Text> hi Exchange !!</Text>
            <Button title="sfsf" onPress={() => func()}> </Button>
        </View>
    )
};

export default Exchange;