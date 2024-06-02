import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Text style={styles.greetingTitle}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
      </View>
      <Image source={require('../assets/profile.png')} style={styles.profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E8D1BA',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    flexDirection: 'column',
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontWeight: 'bold',
  },
});

export default Header;
