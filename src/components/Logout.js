import { Text, View, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Logout({ navigation }) {
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#6A4029",
          padding: 22,
          borderRadius: 20,
          marginTop: 350,
          marginHorizontal: 60,
        }}
        onPress={() => {
          AsyncStorage.removeItem("@userData");
          alert("Logged out");
          navigation.navigate("Start");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "white",
            textAlign: "center",
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
