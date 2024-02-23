import { StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Navigation from "./src/navigation/navigation";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#78c415",
    secondary: "#0085bb",
    rose: "#FFEEFB",
    colorFb: "#374c8a",
    textPrimary: "#010101",
    textSecondary: "#999999",
    colorWhite: "#F1F1F2",
    black: "#000000",
    error: "red",
    success: "green",
    grey200: "#F9F9F9",
    body: "#FFFFFF",
  },
  fonts: {
    ...DefaultTheme.fonts,
    titleLarge: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#010101",
    },
    titleMedium: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#010101",
    },
    titleSmall: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#010101",
    },
    bodySmall: {
      fontSize: 12,
      fontWeight: "normal",
      color: "#999999",
    },
    bodyMedium: {
      fontSize: 13,
      fontWeight: "normal",
      color: "#999999",
    },
    bodyLarge: {
      fontSize: 15,
      fontWeight: "normal",
      color: "#010101",
    },
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
