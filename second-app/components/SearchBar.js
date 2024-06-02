import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={24} color="silver" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" placeholderTextColor="silver" />
      <Feather name="sliders" size={23} color="gray" style={[styles.icon, styles.rotatedIcon]} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    width: '100%',
    marginLeft: 3,
    elevation: 1, // Add a subtle shadow for depth
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginHorizontal: 5,
  },
  rotatedIcon: {
    transform: [{ rotate: '90deg' }],
  },
});

export default SearchBar;
