import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Searchbar, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import ProductCard from "../Common/ProductCard/ProductCard";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const productData = [
  {
    id: 1,
    title: "Produit 1",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Produit 2",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Produit 3",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Produit 4",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Produit 5",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Produit 6",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    title: "Produit 7",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Lorem ipsum dolor sit amet",
  },
];

const ProductList = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const theme = useTheme();
  const { rose, primary } = theme.colors;
  const { id } = route.params;
//   console.log(id)
  const handleSearch = () => {
    navigation.navigate("Search", { query: text });
  };
  const handleViewProduct = (id) => {
    navigation.navigate("Product", { id });
  };
  return (
    <Layout>
      <Searchbar
        placeholder="Recherche"
        style={{ backgroundColor: rose, marginBottom: 10 }}
        onChangeText={(text) => setText(text)}
        value={text}
        onIconPress={handleSearch}
        icon={() => <FontAwesome name="search" color={primary} size={20} />}
      />
      <View style={styles.view}>
        {productData &&
          productData.map((product, idx) => (
            <ProductCard
              key={idx}
              product={product}
              handleViewProduct={handleViewProduct}
            />
          ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
});
export default ProductList;
