import React, { useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useState } from "react/cjs/react.development";

import FAIcons from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import styles from "./styles";


//https://finance.naver.com/item/item_right_ajax.naver?type=recent&code=005930&page=1
const TARGET_API = `https://api.manana.kr/exchange/rate/KRW/USD.json`;

const Exchange = () => {

    const [date, setDate] = useState(null);
    const [lName, setLName] = useState(null);
    const [rName, setRName] = useState(null);
    const [rate, setRate] = useState(null);



    useEffect(() => {
        updateRate();
    }, [])

    const updateRate = async () => {
        let json;
        try {
            const response = await fetch(
                TARGET_API
            );
            json = await response.json();
            // console.log(json);

            if (json != null) {
                const d = json[0].date;
                var timestemp = new Date(d);
                const formatted = moment(timestemp).format("yyyy-MM-DD HH:MM");
                const n = json[0].name;
                setDate(formatted);
                setLName(n.substr(0, 3));
                setRName(n.substr(3, 3));
                setRate(json[0].rate);
            }
        } catch (error) {
            console.error(error);
        }
        // console.log("after");
        return json;
    };

    return (
        <View style={styles.container}>
            <View style={styles.exchangeContainer}>
                <View style={styles.innerContainer1}>

                    <View style={styles.innerContainer2}>
                        <Text style={styles.currencyChangeText}>{rate}</Text>
                        <Text style={styles.otherText}>{lName} / {rName}</Text>
                        <Text style={styles.otherText}>{date}</Text>
                    </View>
                    <View style={styles.refreshContainer}>
                        <TouchableOpacity onPress={updateRate}>
                            <FAIcons on name="refresh" size={20} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        </View>
    )
};

export default Exchange;