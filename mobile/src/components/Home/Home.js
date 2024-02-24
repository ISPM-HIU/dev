import { Button, Text, useTheme } from "react-native-paper";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Layout from "../Layout/Layout";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const theme = useTheme();
  const { rose, primary } = theme.colors;

  const handleScan = () => {
    // Add function for search
    navigation.navigate("Scanner");
  };
  const handleProfil = () => {
    // Add function for search
    navigation.navigate("Profile");
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

  return (
    <Layout>
      <View style={{marginTop: "50%"}}>
        <Button style={styles.button} mode="contained" onPress={handleProfil}>
          Mon profile
        </Button>
        <Button style={styles.button} mode="contained" onPress={handleScan}>
          Scanner
        </Button>
      </View>
    </Layout>
  );
};

export default Home;
