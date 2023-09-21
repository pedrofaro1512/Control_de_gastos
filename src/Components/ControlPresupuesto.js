import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import globalStyles from "../styles";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = (props) => {
  const { presupuesto, gastos } = props;

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <View style={styles.container}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.image} source={require("../img/grafico.jpg")} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto: {""}</Text>

          {formatearCantidad(presupuesto)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Disponible: {""}</Text>

          {formatearCantidad(disponible)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Gastado: </Text>

          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  centrarGrafica: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  containerText: {
    marginTop: 40,
  },
  value: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
    color: "#3B82F6",
  },
});

export default ControlPresupuesto;
