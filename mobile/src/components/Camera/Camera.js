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
      let fako = data.split("/")[0].split("=")[1]
      let localisaton = data.split("/")[1].split("=")[1]
      console.log(newData.fako)
      setQueryValue({
        fako: fako,
        localisaton
      });
    }
  }, []);
  return (
    <Layout>
      <Text>Fako numéro</Text>
    </Layout>
  );
};
export default Camera;
