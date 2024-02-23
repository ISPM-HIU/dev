import { Button, Searchbar, useTheme } from "react-native-paper";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Layout from "../Layout/Layout";
import { StyleSheet } from "react-native";
const Home = ({ navigation }) => {
  const [text, setText] = useState("");
  const theme = useTheme();
  const { rose, primary } = theme.colors;

  const handleSearch = () => {
    // Add function for search
    navigation.navigate("Search", { query: text });
  };

  const handleScan = () => {
    // Add function for search
    navigation.navigate("Scanner");
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
    <Layout >
      {/* <Searchbar
        placeholder="Recherche"
        style={{ backgroundColor: rose, marginBottom: 10 }}
        onChangeText={(text) => setText(text)}
        value={text}
        onIconPress={handleSearch}
        icon={() => <FontAwesome name="search" color={primary} size={20} />}
      /> */}
      <Button style={styles.button} mode="contained">
        Mon profile
      </Button>
      <Button style={styles.button} mode="contained" onPress={handleScan}>
        Scanner
      </Button>
    </Layout>
  );
};

export default Home;
