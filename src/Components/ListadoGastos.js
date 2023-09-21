import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setModal, setGasto }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.noGastos}>No hay gastos</Text>
      ) : (
        gastos.map((gasto) => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            setModal={setModal}
            setGasto={setGasto}
          />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 50,
    marginBottom: 70,
  },
  titulo: {
    color: "#64748B",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
  },
  noGastos: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
  },
});

export default ListadoGastos;
