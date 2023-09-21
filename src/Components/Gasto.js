import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import globalStyles from "../styles";
import { formatearCantidad, formatearFecha } from "../helpers";

const diccionarioIconos = {
  ahorro: require("../img/icono_ahorro.png"),
  casa: require("../img/icono_casa.png"),
  comida: require("../img/icono_comida.png"),
  gastos: require("../img/icono_gastos.png"),
  ocio: require("../img/icono_ocio.png"),
  salud: require("../img/icono_salud.png"),
  suscripciones: require("../img/icono_suscripciones.png"),
};

const Gasto = ({ gasto, setModal, setGasto }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  const handleAcciones = () => {
    setModal(true);
    setGasto(gasto);
  };

  return (
    <Pressable onPress={handleAcciones}>
      <View style={styles.contenedor}>
        <View style={styles.contenido}>
          <View style={styles.contenedorImagen}>
            <Image
              style={styles.imagen}
              source={diccionarioIconos[categoria]}
            />
            <View style={styles.contendorTexto}>
              <Text style={styles.categoria}>{categoria}</Text>
              <Text style={styles.nombre}>{nombre}</Text>
              <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
            </View>
            <Text style={styles.cantidad}>{formatearCantidad(cantidad)}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.container,
    marginBottom: 10,
  },
  contenido: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contenedorImagen: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagen: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  contendorTexto: {
    flex: 1,
  },
  categoria: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  nombre: {
    color: "#64748B",
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "600",
  },
  fecha: {
    fontSize: 14,
    fontWeight: "600",
    color: "#DB2777",
  },
  cantidad: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Gasto;
