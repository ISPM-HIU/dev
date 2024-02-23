import React from "react";
import globalStyle from "../GlobalStyle/GlobalStyle";
import { View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Layout = ({ children, style }) => {
  return (
    <SafeAreaView style={[globalStyle.container, style]}>
      <StatusBar style="dark" />
      <View style={{ paddingLeft: 10, paddingRight: 10, height: "100%" }}>
        <ScrollView
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Layout;
