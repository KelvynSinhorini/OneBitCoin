import React from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView, Platform } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList'
import QuotationItem from './src/components/QuotationList/QuotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor="#f50d41"
      barStyle="light-content"
       />
       <CurrentPrice />
       <HistoryGraphic />
       <QuotationList />
       <QuotationItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
