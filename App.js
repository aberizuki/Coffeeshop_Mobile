import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//screens
import HomeScreen from "./src/screens/home";
import Detailproduct from "./src/screens/detailProduct";
import AddProduct from "./src/screens/addproduct";
import Start from "./src/screens/Auth/start";
import Welcome from "./src/screens/Auth/welcome";
import Login from "./src/screens/Auth/login";
import Register from "./src/screens/Auth/register";
import Payment from "./src/screens/paymentMethod";

//end screens

const Stack = createNativeStackNavigator();

function App() {
  const [isLogin, setIsLogin] = React.useState({
    value: false,
    data: {},
  });
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem("@userData");
      if (value !== null) {
        setIsLogin({
          value: true,
          data: JSON.parse(value),
        });
      } else {
        setIsLogin({
          value: false,
          data: {},
        });
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getDataAuth();
  }, []);
  //TODO flow authentication (https://reactnavigation.org/docs/auth-flow/)
  //TODO drawer navigation + tab navigation
  //https://reactnavigation.org/docs/drawer-based-navigation/
  // https://reactnavigation.org/docs/nesting-navigators/
  // https://reactnavigation.org/docs/bottom-tab-navigator/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin.value ? (
          <>
            {/* <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            /> */}
            <Stack.Screen
              name="DetailProduct"
              component={Detailproduct}
              options={{ title: "Detail" }}
            />
            <Stack.Screen
              name="AddProduct"
              component={AddProduct}
              options={{ title: "Add Product" }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ title: "Payment" }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ title: "Start" }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ title: "Register" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
