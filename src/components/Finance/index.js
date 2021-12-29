import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import yahooFinance from 'yahoo-finance2';
import styles from "./styles";

const DATA = [
    {
        id: "AAPL",
    },
    {
        id: "SBUX",
    },
    {
        id: "MSFT",
    },
    {
        id: "AMZN",
    },
    {
        id: "MMM",
    },
    {
        id: "NKE",
    },
    {
        id: "NVDA",
    },
]

const Item = ({ item, onPress, backgroundColor, textColor }) => {
    const [curPrice, setCurPrice] = useState(null);
    
    useEffect(() => {
        func();
    }, []);
    const func = async () => {
        try {
            console.log("results");       
            const quote = await yahooFinance.quote(item.id);
            console.log(quote);
            console.log(quote.regularMarketPrice);
            setCurPrice(quote.regularMarketPrice);
        } catch (error) {

        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={styles.cardContainer}>
                <Text style={[styles.title, textColor]}>{item.id}</Text>
                <Text style={[styles.title, textColor]}>{curPrice}</Text>
            </View>

        </TouchableOpacity>
    );
}




const Finance = ({theme}) => {

    // const yahooFinance = require('yahoo-finance2').default; // NOTE the .default
    const [selectedId, setSelectedId] = useState(null);



    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : theme;
        // const color = item.id === selectedId ? 'white' : 'black';
        const backgroundColor = theme;
        const color = item.id === selectedId ? 'white' : '#cccccc';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };


    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </View>
    )
}

export default Finance;