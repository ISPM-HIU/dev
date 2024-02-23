import React, { useEffect, useState } from "react";
import { Searchbar, useTheme, Text } from "react-native-paper";
import Layout from "../Layout/Layout";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Search = ({ route }) => {
  const theme = useTheme();
  const { query } = route.params;
  const { rose, primary } = theme.colors;
  const [queryValue, setQueryValue] = useState(null);
  useEffect(() => {
    if (query) setQueryValue(query);
  }, []);
  const handleSearch = (text) => {
    setQueryValue(text);
    console.log(text);
  };
  return (
    <Layout>
      <Searchbar
        placeholder="Recherche"
        style={{ backgroundColor: rose, marginBottom: 10 }}
        onChangeText={(text) => handleSearch(text)}
        value={queryValue}
        icon={() => <FontAwesome name="search" color={primary} size={20} />}
      />
      <Text>{queryValue}</Text>
    </Layout>
  );
};
export default Search;
