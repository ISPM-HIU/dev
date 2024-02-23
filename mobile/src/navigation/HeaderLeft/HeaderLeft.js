import { Pressable, StyleSheet } from "react-native";
import CustomImage from "../../components/Common/CustomImage";

const HeaderLeft = ({ navigation }) => {
  const handleGo = () => {
    navigation?.navigate("Home");
  };
  return (
    <Pressable style={styles.root} onPress={handleGo}>
      <CustomImage
        style={styles.logo}
        src={require('../../images/icon.png')}
      />
    </Pressable>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "60%",
  },
  root: {
    width: 130,
    height: "100%",
    paddingTop: 15,
    paddingLeft: 15,
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 0,
    marginBottom: 8,
  },
});
