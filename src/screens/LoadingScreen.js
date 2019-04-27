import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Text, View } from "native-base";
import { firebaseAuth } from "../store";

export class LoadingScreen extends Component {
  componentDidMount() {
    firebaseAuth.onAuthStateChanged(user => {
      let screen = "StackNavigator";
      if (user == null) {
        screen = "LoginScreen";
      }
      setTimeout(() => {
        this.props.navigation.navigate(screen);
      }, 900);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/placeholder.png")}
          style={styles.drawerImage}
        />
        <Text style={styles.title}> Quicksterr </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold"
  },
  drawerImage: {
    height: 200,
    width: 200
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingScreen;
