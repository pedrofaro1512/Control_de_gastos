import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  return (
    <View>
      <Text style={styles.texto}>planificador de gastos</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    textAlign: "center",
    fontSize: 30,
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingTop: 50,
  },
});

export default Header;
