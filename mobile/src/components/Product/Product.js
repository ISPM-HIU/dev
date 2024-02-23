import { SafeAreaView, Text, View } from "react-native";
import { Button, Card, Searchbar, useTheme } from "react-native-paper";
import globalStyle from "../GlobalStyle/GlobalStyle";
import { ScrollView } from "react-native-gesture-handler";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import CustomSnackBar from "../Common/CustomSnackBar/CustomSnackBar";
import { useState } from "react";
import { addToCart } from "../../store/slice/cartSlice";

const productData = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Lorem ipsum dolor sit amet",
  }
];
const Product = ({ route }) => {
  const [isSend, setIsSend] = useState(true);
  const dispatch = useDispatch();
  const { id } = route.params;
  const theme = useTheme();
  const { rose, primary } = theme.colors;
  const product = productData.find(function (element) {
    return element.id == id;
  });

  const handleAddToCart = () => {
    let data = {
      id: product.id,
      title: product.title,
      number: 1
    }
    dispatch(addToCart(data));
    setIsSend(true);
  };

  return (
    <Layout>
      <Card elevation={0}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text variant="displayMedium">{product.title}</Text>
          <Text variant="bodyMedium">{product.description}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleAddToCart}>Demander un devis</Button>
        </Card.Actions>
      </Card>
    </Layout>
  );
};
export default Product;
