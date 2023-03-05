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
  contentRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentRowLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  containerWhite: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
  },
  hr: {
    backgroundColor: "#A2A2A2",
    height: 1,
    width: "100%",
    marginVertical: 10,
  },
});

const CheckoutScreen = () => {
  return (
    <View style={commonStyle.bg}>
      <Text
        style={[
          commonStyle.mt20,
          commonStyle.black,
          commonStyle.bold,
          commonStyle.XL,
          style.title,
        ]}
      >
        Delivery
      </Text>
      <View style={[style.contentRow, style.sectionContent]}>
        <Text style={[commonStyle.black, commonStyle.semiBold, commonStyle.L]}>
          Address details
        </Text>
        <Text style={[commonStyle.grey, commonStyle.semiBold, commonStyle.M]}>
          Change
        </Text>
      </View>
      <View style={[style.containerWhite, style.subTitle]}>
        <Text
          style={[
            commonStyle.black,
            commonStyle.bold,
            commonStyle.M,
            style.subTitle,
          ]}
        >
          Iskandar Street
        </Text>
        <View style={[style.hr]} />
        <Text style={[commonStyle.grey, commonStyle.semiBold, commonStyle.S]}>
          Km 5 refinery road oppsite re public road, effurun, Jakarta
        </Text>
        <View style={[style.hr]} />
        <Text style={[commonStyle.black, commonStyle.semiBold, commonStyle.S]}>
          +62 81348287878
        </Text>
      </View>
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
      <View style={[style.containerWhite, style.subTitle, commonStyle.mb10per]}>
        <View style={[style.contentRowLeft]}>
          <Image
            source={require("../../images/radioOn.png")}
            style={{
              marginRight: 20,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              commonStyle.black,
              commonStyle.bold,
              commonStyle.S,
              style.subTitle,
            ]}
          >
            Door delivery
          </Text>
        </View>
        <View style={[style.hr]} />
        <View style={[style.contentRowLeft]}>
          <Image
            source={require("../../images/radioOff.png")}
            style={{
              marginRight: 20,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              commonStyle.grey,
              commonStyle.semiBold,
              commonStyle.S,
              style.subTitle,
            ]}
          >
            Pick up at store
          </Text>
        </View>
        <View style={[style.hr]} />
        <View style={[style.contentRowLeft]}>
          <Image
            source={require("../../images/radioOff.png")}
            style={{
              marginRight: 20,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              commonStyle.grey,
              commonStyle.semiBold,
              commonStyle.S,
              style.subTitle,
            ]}
          >
            Dine in
          </Text>
        </View>
      </View>
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
          Proceed to payment
        </Text>
      </Pressable>
    </View>
  );
};

export default CheckoutScreen;
