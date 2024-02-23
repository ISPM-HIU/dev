import React from "react";
import { Avatar, DataTable } from "react-native-paper";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../../store/slice/cartSlice";
import { Pressable, StyleSheet } from "react-native";

const CartTable = ({ cart, navigation }) => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(removeToCart(id));
  };
  const viewProduct = (id) => {
    navigation.navigate("Product", { id });
  };
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Produit</DataTable.Title>
        <DataTable.Title style={styles.cell} numeric>
          Nombre
        </DataTable.Title>
        <DataTable.Title></DataTable.Title>
      </DataTable.Header>

      {cart.map((product, idx) => (
        <DataTable.Row key={idx} onPress={() => viewProduct(product.id)}>
          <DataTable.Cell>{product.title}</DataTable.Cell>
          <DataTable.Cell style={styles.cell} numeric>
            {product.number}
          </DataTable.Cell>
          <DataTable.Cell style={styles.cell}>
            <Pressable onPress={() => removeFromCart(product.id)}>
              <Avatar.Icon style={styles.trash} size={32} icon="delete" />
            </Pressable>
          </DataTable.Cell>
        </DataTable.Row>
      ))}

      {/* <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      /> */}
    </DataTable>
  );
};
const styles = StyleSheet.create({
  trash: {
    backgroundColor: "#f5f6f7",
  },
  cell: {
    display: "flex",
    justifyContent: "center",
  },
});
export default CartTable;
