import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style"

export default function QuotationItem(){
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style={styles.logoBitcoin}
                        source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayQuotation}>05/02/2023</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 533.444</Text>
            </View>
        </View>
    )
}