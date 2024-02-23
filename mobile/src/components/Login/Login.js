import React from "react";
import Layout from "../Layout/Layout";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { Pressable, StyleSheet, View } from "react-native";
import CustomInput from "../Common/CustomInput/CustomInput";

const Login = ({ navigation }) => {
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
      marginTop: 10,
      justifyContent: "center",
    },
  });

  const handleRegister = () => {
    navigation.navigate("Register");
  };
  const handleChange = (name, value) => {};
  return (
    <Layout>
      <View style={{ marginTop: "20%" }}>
        <Text variant="titleLarge">Se connecter</Text>
        <CustomInput label="Email" name="email" handleChange={handleChange} />
        <CustomInput
          label="Mot de passe"
          name="password"
          handleChange={handleChange}
        />
        <Text>
          Pas encore de compte ?{" "}
          <>
            <Text style={styles.link} onPress={handleRegister}>
              créer mon compte
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
export default Login;
