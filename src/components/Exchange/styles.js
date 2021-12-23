import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical : 3,
    },
    exchangeContainer: {
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#99CC99",
        borderRadius: 20,
    },
    innerContainer1 : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    innerContainer2 : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical :10,
    },
    refreshContainer : {
        // flex : 1,
        width : '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf:'center', 
        position:'absolute',
        paddingRight : 10,
    },
    currencyChangeText : {
        fontSize : 40,
        fontWeight : 'bold',
    },
    otherText : {
        fontSize : 13,
    },

});

export default styles;