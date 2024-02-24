import React, { useEffect, useState } from "react";
import { Searchbar, useTheme, Text, Button } from "react-native-paper";
import Layout from "../Layout/Layout";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

const Confirmation = ({ route, navigation }) => {
  const theme = useTheme();
  const { query } = route.params;
  const { rose, primary } = theme.colors;
  const [queryValue, setQueryValue] = useState(null);
  useEffect(() => {
    if (query) {
      let data = JSON.stringify(query);
      let fako = data.split("/")[0].split("=")[1];
      let localisaton = data.split("/")[1].split("=")[1];
      setQueryValue({
        fako,
        localisaton,
      });
    }
  }, []);
  const handlePhoto = () => {
    navigation.navigate("Camera");
  };
  return (
    <Layout>
        <Image
          source={require("../../images/poubelle.jpg")}
          style={{width: "100%", height:"200px"}}
        />
      <Text>Fako numéro: {queryValue && queryValue.fako}</Text>
      <Text>Lieux: {queryValue && queryValue.localisaton}</Text>
      <Button style={styles.button} mode="contained" onPress={handlePhoto}>
        Ouvrir l'appareil photo
      </Button>
    </Layout>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 50,
    display: "flex",
    marginTop: 10,
    justifyContent: "center",
  },
});
export default Confirmation;
