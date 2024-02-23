import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const HeaderRight = ({ navigation }) => {
  const handleProfile = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.view}>
      <Pressable style={styles.root} onPress={handleProfile}>
        <Avatar.Icon
          style={{ backgroundColor: "#eeee" }}
          size={35}
          icon="account"
        />
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: "90%",
    height: "90%",
  },
  root: {
    width: 50,
    height: "100%",
    paddingTop: 0,
    paddingLeft: 0,
    display: "flex",
    justifyContent: "center",
    marginBottom: 0,
  },
  number: {
    position: "absolute",
    top: 0,
    right: 5,
    zIndex: 99,
    textAlign: "center",
    paddingTop: 1,
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: "#002d84",
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
