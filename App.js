import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Item from "./Item.js";

class App extends Component {
  state = {
    search: "",
  };

  filterList(list) {
    return list.filter(
      (listItem) =>
        listItem.nom.toLowerCase().includes(this.state.search.toLowerCase()) ||
        listItem.parti.toLowerCase().includes(this.state.search.toLowerCase())
    );
  }

  render() {
    const list = [
      { nom: "Melacron", prenom: "Leonard", parti: "Jores" },
      { nom: "Lapaine", prenom: "Marianne", parti: "La Fronce" },
      { nom: "Miliou", prenom: "Mi", parti: "Un peu beaucoup" },
      { nom: "Grognard", prenom: "Robert", parti: "Populota" },
    ];

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(search) => this.setState({ search })}
          style={styles.searchBar}
        />
        {this.filterList(list).map((listItem, index) => (
          <Item
            key={index}
            nom={listItem.nom}
            prenom={listItem.prenom}
            parti={listItem.parti}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    height: "100%",
  },
  searchBar: {
    fontSize: 24,
    margin: 10,
    marginTop: 60,
    borderRadius: 10,
    width: "90%",
    height: 50,
    backgroundColor: "white",
  },
});

export default App;
