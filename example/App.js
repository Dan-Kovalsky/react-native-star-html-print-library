/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StarHtmlPrintLibrary from 'react-native-star-html-print-library';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--'
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        status: 'native callback received',
        message: "THREE SEC PASSED"
      });
    }, 3000)
  }

  onPressBtn = () => {
    alert('Pressed');
    StarHtmlPrintLibrary.printHtml('html', '123', 'port', 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressBtn}>
          <Text>BUTTON</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>☆StarHtmlPrintLibrary example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
