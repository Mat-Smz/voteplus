import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Item extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.prenom} {this.props.nom} - {this.props.parti}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 20,
    margin: 5,
    borderRadius: 2,
    width: "90%",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Item;
