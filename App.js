/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, PixelRatio } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.center]}>
          <Text style={styles.font}>酒店</Text>
        </View>

        <View style={[styles.item,styles.leftLineStyle]}>
          <View style={[styles.flex, styles.center,styles.centerLineStyle]}>
            <Text style={styles.font}>海外酒店</Text>
          </View>
          <View style={[styles.flex, styles.center]}>
            <Text style={styles.font}>特惠酒店</Text>
          </View>
        </View>

        <View style={[styles.item,styles.leftLineStyle]}>
          <View style={[styles.flex, styles.center,styles.centerLineStyle]}>
            <Text style={styles.font}>团购</Text>
          </View>
          <View style={[styles.flex, styles.center]}>
            <Text style={styles.font}>客栈,公寓</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 84,
    flexDirection: "row",
    padding: 2,
    marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    backgroundColor: "#ff0067"
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  font: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  leftLineStyle: {
    borderColor: "#fff",
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
  },
  centerLineStyle: {
    borderColor: "#fff",
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  // a: {

  // }
});
