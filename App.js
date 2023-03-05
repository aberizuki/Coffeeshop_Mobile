import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import Home from "./src/screens/home";
import Detailproduct from "./src/screens/detailProduct";
import AddProduct from "./src/screens/addproduct";
import Start from "./src/screens/Auth/start";
import Welcome from "./src/screens/Auth/welcome";
import Login from "./src/screens/Auth/login";
import Register from "./src/screens/Auth/register";
import Payment from "./src/screens/paymentMethod";
import ProfileScreen from "./src/screens/profile";
import Logout from "./src/components/Logout";
import CheckoutScreen from "./src/screens/checkout";

//end screens

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#6A4029",
          },
          headerTintColor: "#FFF",
        }}
      />
      {/* <Drawer.Screen name="Order" component={Order} /> */}
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={Detailproduct}
          options={{ title: "Detail Product" }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ title: "Checkout" }}
        /> */}
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "profile" }}
        />
        {/* <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ title: "Payment" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
