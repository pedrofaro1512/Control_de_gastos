import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles";

const FormularioGasto = ({ setModal, hadleGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => setModal(false)} style={styles.btnCancelar}>
          <Text style={styles.btnCancelarText}>Cancelar</Text>
        </Pressable>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del gasto"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del gasto"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Categoría Gasto</Text>
          <Picker
            style={styles.input}
            selectedValue={categoria}
            onValueChange={(itemValue) => {
              setCategoria(itemValue);
            }}
          >
            <Picker.Item label="-- Seleccione --" value={""} />
            <Picker.Item label="Ahorro" value={"ahorro"} />
            <Picker.Item label="Comida" value={"comida"} />
            <Picker.Item label="Casa" value={"casa"} />
            <Picker.Item label="Gastos varios" value={"gastos varios"} />
            <Picker.Item label="Salud" value={"salud"} />
          </Picker>
        </View>

        <Pressable
          style={styles.submitBtn}
          onPress={() => hadleGasto({ nombre, cantidad, categoria })}
        >
          <Text style={styles.submitBtnText}>Agregar Gasto</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E40AF",
    flex: 1,
  },
  btnCancelar: {
    backgroundColor: "#DB2777",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnCancelarText: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  formulario: {
    ...globalStyles.container,
  },
  titulo: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 30,
    color: "#647488",
  },
  campo: {
    marginVertical: 10,
  },
  label: {
    color: "#647488",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: "#3B82F6",
    padding: 10,
    marginTop: 20,
  },
  submitBtnText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default FormularioGasto;
