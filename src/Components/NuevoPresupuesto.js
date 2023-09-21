import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import globalStyles from "../styles";

const NuevoPresupuesto = (props) => {
  const { handleNuevoPresupuesto, presupuesto, setPresupuesto } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Definir presupuesto</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto"
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}
        style={styles.input}
      />

      <Pressable
        style={styles.boton}
        onPress={() => handleNuevoPresupuesto(presupuesto)}
      >
        <Text style={styles.botonTexto}>Agregar presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    color: "#3B82F6",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 15,
  },
  boton: {
    marginTop: 15,
    backgroundColor: "#1048A4",
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: "#FFF",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default NuevoPresupuesto;
