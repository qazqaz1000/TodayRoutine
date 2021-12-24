import React, { useEffect } from "react";
import { View, Text, Button} from "react-native";
import yahooFinance from 'yahoo-finance2';

const Finance = () => {

    // const yahooFinance = require('yahoo-finance2').default; // NOTE the .default

const func = async () =>{
    try {
        // const results = await yahooFinance.search('AAPL');
        console.log("results");        
        // const results = await yahooFInance.search('AAPL', { someOption: true, etc });
        // console.log(results);        
        const quote = await yahooFinance.quote('AAPL');
        // const { regularMarketPrice as price, currency } = quote;
        console.log(quote.regularMarketPrice);        
    } catch (error) {
        
    }
    // const results = await yahooFinance.search('AAPL');
    // const results = await yahooFInance.search('AAPL', { someOption: true, etc });
    // console.log(results);
    // const quote = await yahooFinance.quote('AAPL');
    // const { regularMarketPrice as price, currency } = quote;
}


    return (
        <View>

            <Text>ggggggg</Text>
            <Button title="call" onPress={func}></Button>
        </View>
    )
}

export default Finance;