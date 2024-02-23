import React, { useEffect } from "react";
import { getAuthToken } from "../services/token";

const Redirect = ({ navigation, children }) => {
  const token = getAuthToken();

  useEffect(() => {
    if(token) {
        navigation.navigate("Home")
    }
  }, [navigation]);

  return token ? children : null;
};
export default Redirect;
