import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const SubCategorieCard = ({ category, handleViewCategory }) => {
  return (
    <Card
      elevation={0}
      style={styles.card}
      onPress={() => handleViewCategory(category.id)}
    >
      <Card.Cover
        style={styles.cover}
        source={{ uri: "https://picsum.photos/800" }}
      />
      <Card.Content style={styles.content}>
        <Text>{category.title}</Text>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 5,
    backgroundColor: "#f5f6f7",
    marginBottom: 5,
  },
  cover: {
    margin: 0,
    height: 100,
  },
  content: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    paddingTop: "20%",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 11,
  },
});
export default SubCategorieCard;
