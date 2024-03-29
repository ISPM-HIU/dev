import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home/Home";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import Search from "../components/Search/Search";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import Scanner from "../components/Scanner/Scanner";
import Redirect from "../pageGuard/Redirect";
import Camera from "../components/Camera/Camera";
import Confirmation from "../components/Confirmation/Confirmation";

const Stack = createStackNavigator();

const options = ({ navigation }) => {
  return {
    headerLeft: () => <HeaderLeft navigation={navigation} />,
    // headerRight: () => <HeaderRight navigation={navigation} />,
    headerTitle: "",
  };
};

const loginOptions = ({ navigation }) => {
  return {
    headerLeft: () => <HeaderLeft navigation={navigation} />,
    headerTitle: "",
  };
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(props) => ({
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          ...TransitionPresets.SlideFromRightIOS,
        })}
        initialRouteName={"Login"}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) =>
            options({
              navigation,
            })
          }
          component={Home}
        />
        <Stack.Screen
          name="Scanner"
          options={({ navigation }) =>
            options({
              navigation,
            })
          }
          component={Scanner}
        />
        <Stack.Screen
          name="Search"
          options={({ navigation }) =>
            options({
              navigation,
            })
          }
          component={Search}
        />
        <Stack.Screen
          name="Profile"
          options={({ navigation }) =>
            options({
              navigation,
            })
          }
          component={Profile}
        />
        <Stack.Screen
          name="Login"
          options={({ navigation }) =>
            loginOptions({
              navigation,
            })
          }
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={({ navigation }) =>
            loginOptions({
              navigation,
            })
          }
          component={Register}
        />
        <Stack.Screen
          name="Camera"
          options={({ navigation }) =>
            loginOptions({
              navigation,
            })
          }
          component={Camera}
        />
        <Stack.Screen
          name="Confirmation"
          options={({ navigation }) =>
            loginOptions({
              navigation,
            })
          }
          component={Confirmation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
