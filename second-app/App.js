import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/categories';
import OngoingTasks from './components/OngoingTask';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <OngoingTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
  },
});
