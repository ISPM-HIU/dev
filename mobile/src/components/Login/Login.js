import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { Pressable, StyleSheet, View } from "react-native";
import CustomInput from "../Common/CustomInput/CustomInput";
import useHttps from "../../services/useHttps";
import { getAuthToken, setAuthToken } from "../../services/token";

const Login = ({ navigation }) => {
  const theme = useTheme();
  const { secondary } = theme.colors;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { https } = useHttps();

  const styles = StyleSheet.create({
    link: {
      color: secondary,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
    button: {
      borderRadius: 30,
      height: 50,
      display: "flex",
      marginTop: 10,
      justifyContent: "center",
    },
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (data) {
      try {
        setLoading(true);
        let response = await https.post("/users/login", data);
        if (response) {
          setAuthToken(response.data);
          navigation.navigate("Home");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError(true);
      }
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      navigation.navigate("Home");
    }
  }, []);

  return (
    <Layout>
      <View style={{ marginTop: "25%" }}>
        <Text
          variant="titleLarge"
          style={{ color: secondary, paddingLeft: 10 }}
        >
          Se connecter
        </Text>
        <CustomInput label="Email" name="email" handleChange={handleChange} />
        <CustomInput
          label="Mot de passe"
          name="password"
          handleChange={handleChange}
        />
         {error && (
          <Text style={{ paddingLeft: 10, color: "red" }}>
            Une erreur c'est produite.
          </Text>
        )}
        <Text style={{ paddingLeft: 10 }}>
          Pas encore de compte ?{" "}
          <>
            <Text style={styles.link} onPress={handleRegister}>
              créer mon compte
            </Text>
          </>
        </Text>
        <Button
          disabled={loading}
          style={styles.button}
          mode="contained"
          onPress={handleSubmit}
        >
          {loading ? "Chargement..." : "Connexion"}
        </Button>
      </View>
    </Layout>
  );
};
export default Login;
