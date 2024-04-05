import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const ActivityIndicatorLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#34cc8c" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIndicatorLoader;
