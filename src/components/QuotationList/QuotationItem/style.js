import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    contextLeft: {
        width: "36%",
        alignItems: "flex-start",
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2
    },
    dayQuotation: {
        fontSize: 16,
        paddingLeft: 5,
        color: "#fff",
        fontWeight: "bold"
    },
    contextRigth: {
        width: "60%",
        alignItems: "flex-end",
    },
    price: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles;