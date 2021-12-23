import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical : 3,
    },
    weatherContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#03aefe",
        borderRadius: 20,
        marginHorizontal: 10
    },
    weatherIconTempContainer: {
        // backgroundColor : "#fffddd",
        width: '70%',
        alignItems: 'center',
        paddingBottom  : 10,
    },
    weatherIconStyle: {
        width : 100,
        height : 100,
    },
    curTempTextStyle: {
        fontWeight: "500",
        fontSize: 35,
    },

    sideTextStyle: {
        fontSize: 13,
        marginVertical : 1,
    },
    
    cityTempContainer : {
        width : '30%',
        justifyContent: 'space-between',
        alignItems : 'flex-end',
        paddingRight : 10,
    },
    cityTempStyle : {
        width : '80%',
        alignItems : 'flex-end',
        marginVertical : 3,
    }
});

export default styles;