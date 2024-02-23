import React, { useEffect, useState } from "react";
import { Searchbar, useTheme, Text } from "react-native-paper";
import Layout from "../Layout/Layout";

const Camera = ({ route }) => {
  const theme = useTheme();
  const { query } = route.params;
  const { rose, primary } = theme.colors;
  const [queryValue, setQueryValue] = useState(null);
  useEffect(() => {
    if (query) {
      let data = JSON.stringify(query)
      setQueryValue(data);
    }
  }, []);
  return (
    <Layout>
      <Text>{queryValue}</Text>
    </Layout>
  );
};
export default Camera;
