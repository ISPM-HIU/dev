import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

const CustomInput = ({ label, name = "email", value = null, handleChange }) => {
  const theme = useTheme();
  const { primary } = theme.colors;
  const [isFocus, setIsFocus] = useState(false);
  const styles = StyleSheet.create({
    input: {
      backgroundColor: "#f5f5f5",
      borderColor: "#ced4da",
      borderWidth: 0,
      borderRadius: 50,
      padding: 0,
      marginBottom: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  });
  return (
    <TextInput
      placeholder={label}
      style={styles.input}
      value={value}
      mode="outlined"
      activeUnderlineColor="transparent"
      underlineColor="transparent"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChangeText={(text) => handleChange(name, text)}
    />
  );
};
export default CustomInput;
