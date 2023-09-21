import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Pressable,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Header from "./src/Components/Header";
import NuevoPresupuesto from "./src/Components/NuevoPresupuesto";
import ControlPresupuesto from "./src/Components/ControlPresupuesto";
import FormularioGasto from "./src/Components/FormularioGasto";
import { generarId } from "./src/helpers";
import ListadoGastos from "./src/Components/ListadoGastos";

export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleNuevoPresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert("Error", "El presupuesto no puede ser 0 o menor.");
    }
  };

  const hadleGasto = (gasto) => {
    if (Object.values(gasto).includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    gasto.id = generarId();
    console.log(gasto);
    setGastos([...gastos, gasto]);

    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
          ) : (
            <NuevoPresupuesto
              handleNuevoPresupuesto={handleNuevoPresupuesto}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
          )}
        </View>

        {isValidPresupuesto && <ListadoGastos gastos={gastos} />}
      </ScrollView>

      {modal && (
        <Modal animationType="slide" visible={modal}>
          <FormularioGasto setModal={setModal} hadleGasto={hadleGasto} />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable onPress={() => setModal(!modal)}>
          <Image
            style={styles.image}
            source={require("./src/img/nuevo-gasto.png")}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  header: {
    backgroundColor: "#3B82F6",
  },
  image: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
    right: 30,
  },
});
