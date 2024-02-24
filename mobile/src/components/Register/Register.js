import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import CustomInput from "../Common/CustomInput/CustomInput";
import { Picker } from "@react-native-picker/picker";
import { getAuthToken, setAuthToken } from "../../services/token";
import useHttps from "../../services/useHttps";
import { useDispatch, useSelector } from "react-redux";

const Register = ({ navigation }) => {
  const theme = useTheme();
  const { secondary } = theme.colors;
  const [selectedValue, setSelectedValue] = useState("java");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { https } = useHttps();
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

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
      justifyContent: "center",
      marginTop: 10,
    },
  });

  const handleRegister = () => {
    navigation.navigate("Login");
  };

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
        data.type = "avertisseur";
        let response = await https.post("/users", data);
        if (response) {
          dispatch(setUser(response.data));
          navigation.navigate("Home");
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (user && user.token) {
      navigation.navigate("Home");
    }
  }, [navigation]);
  return (
    <Layout>
      <View style={{ marginTop: "15%" }}>
        <Text
          variant="titleLarge"
          style={{ color: secondary, paddingLeft: 10 }}
        >
          Créer mon compte
        </Text>
        <CustomInput name="name" label="Nom" handleChange={handleChange} />
        <CustomInput
          name="last_name"
          label="Prenom"
          handleChange={handleChange}
        />
        <CustomInput name="email" label="Email" handleChange={handleChange} />
        <CustomInput
          name="number"
          label="Numéro telephone"
          handleChange={handleChange}
        />
        <CustomInput
          name="password"
          label="Mot de passe"
          handleChange={handleChange}
        />
        {error && (
          <Text style={{ paddingLeft: 10, color: "red" }}>
            Une erreur c'est produite.
          </Text>
        )}
        <Text style={{ paddingLeft: 10 }}>
          Vous avez déjà un compte ?{" "}
          <>
            <Text style={styles.link} onPress={handleRegister}>
              se connecter
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
export default Register;
