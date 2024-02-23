import React from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from "react-native-paper";
import CartTable from "./CartTable/CartTable";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.value);
  return (
    <Layout>
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        Votre panier
      </Text>
      {cart && cart.length != 0 ? (
        <CartTable cart={cart} navigation={navigation} />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 10 }}>Panier vide</Text>
      )}
      {cart && cart.length != 0 && (
        <Button
          mode="contained"
          style={{ marginTop: 25 }}
          onPress={() => console.log("Pressed")}
        >
          Envoyer
        </Button>
      )}
    </Layout>
  );
};
export default Cart;
