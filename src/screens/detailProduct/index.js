import React from "react";
import {
  Pressable,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import commonStyle from "../../styles/commonStyle";

const style = StyleSheet.create({
  flexCenter: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    marginTop: "2%",
  },
  subTitle: {
    marginTop: "1%",
  },
  sectionTitle: {
    marginTop: "20%",
  },
  sectionContent: {
    marginTop: "10%",
  },
  button: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    marginTop: 4,
    marginBottom: 30,
    borderBottomWidth: 2,
    padding: 10,
    borderColor: "#9F9F9F",
  },
  buttonwrap: {
    height: 40,
    marginTop: 30,
    marginBottom: 30,
  },
});

const DetailProductScreen = () => {
  return (
    <View style={commonStyle.bg}>
      <ScrollView>
        <Image
          source={require("../../images/menu1.png")}
          style={{
            width: "100%",
            marginTop: 20,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../images/mark.png")}
          style={{
            width: "100%",
            marginTop: -50,
            marginBottom: 20,
            resizeMode: "contain",
          }}
        />
        <View style={[style.flexCenter]}>
          <Text
            style={[
              commonStyle.black,
              commonStyle.bold,
              commonStyle.XL,
              style.title,
            ]}
          >
            Cold Brew
          </Text>
          <Text
            style={[
              commonStyle.brown,
              commonStyle.semiBold,
              commonStyle.L,
              style.subTitle,
            ]}
          >
            IDR 30.000
          </Text>
        </View>
        <Text
          style={[
            commonStyle.black,
            commonStyle.semiBold,
            commonStyle.L,
            style.sectionTitle,
          ]}
        >
          Delivery info
        </Text>
        <Text
          style={[
            commonStyle.grey,
            commonStyle.semiBold,
            commonStyle.M,
            style.subTitle,
          ]}
        >
          Delivered only on monday until friday from 1 pm to 7 pm
        </Text>
        <Text
          style={[
            commonStyle.black,
            commonStyle.semiBold,
            commonStyle.L,
            style.sectionContent,
          ]}
        >
          Description
        </Text>
        <Text
          style={[
            commonStyle.grey,
            commonStyle.semiBold,
            commonStyle.M,
            style.subTitle,
          ]}
        >
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
        <Pressable
          style={{
            backgroundColor: "#6A4029",
            padding: 22,
            borderRadius: 20,
            marginVertical: 30,
          }}
        >
          {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
          <Text
            color="#F6F6F9"
            align={"center"}
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
            }}
          >
            Add to Cart
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default DetailProductScreen;
