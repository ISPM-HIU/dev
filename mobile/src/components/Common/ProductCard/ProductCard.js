import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const ProductCard = ({
  product,
  handleViewProduct
}) => {
  return (
    <Card
      elevation={0}
      style={styles.card}
      onPress={() => handleViewProduct(product.id)}
    >
    <Card.Cover
      style={styles.cover}
      source={{ uri: "https://picsum.photos/700" }}
    />
      <Card.Content style={styles.content}>
        <Text variant="titleSmall">{product.title}</Text>
        <Text variant="bodyMedium">{product.description}</Text>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "45%",
    backgroundColor: "#f5f6f7",
    marginBottom: 5,
  },
  cover: {
    margin: 0,
    height: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  content: {
    paddingLeft: 5,
    paddingRight: 5
  }
});
export default ProductCard;
