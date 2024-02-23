import React from "react";
import Layout from "../Layout/Layout";
import { Button, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import CustomInput from "../Common/CustomInput/CustomInput";

const Register = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const theme = useTheme();
  const { primary } = theme.colors;

  const styles = StyleSheet.create({
    link: {
      color: primary,
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    },
    button: {
      borderRadius: 5,
      height: 50,
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    },
  });

  const handleRegister = () => {
    navigation.navigate("Login");
  };

  const handleChange = (name, value) => {};
  return (
    <Layout>
      <View style={{ marginTop: "20%" }}>
        <Text variant="titleLarge">Créer mon compte</Text>
        <CustomInput label="Nom" handleChange={handleChange} />
        <CustomInput label="Prenom" handleChange={handleChange} />
        <CustomInput label="Email" handleChange={handleChange} />
        <CustomInput label="Mot de passe" handleChange={handleChange} />
        <Text>
          Vous avez déjà un compte ?{" "}
          <>
            <Text style={styles.link} onPress={handleRegister}>
              se connecter
            </Text>
          </>
        </Text>
        <Button style={styles.button} mode="contained">
          Connexion
        </Button>
      </View>
    </Layout>
  );
};
export default Register;
