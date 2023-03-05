import axios from "axios";
import { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  StatusBar,
  StyleSheet,
  Button,
  View,
} from "react-native";
import { Text } from "../../components/commons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
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

export default function Payment({ route, navigation }) {
  const { id } = route.params;
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.100.152:5000/api/v1/product/${id}`)
      .then((res) => setProductDetail(res.data.data))
      .catch((err) => console.log(err.message));
  });

  return (
    <View style={commonStyle.bg}>
      <ScrollView>
        <Text
          style={[
            commonStyle.mt20,
            commonStyle.black,
            commonStyle.bold,
            commonStyle.XL,
            style.title,
          ]}
        >
          Payment Methods
        </Text>
        <Image
          source={require("../../images/card.png")}
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
            marginTop: 10,
            marginBottom: 20,
            resizeMode: "contain",
          }}
        />
        <View style={[style.hr]} />
        <View style={[style.contentRow, style.sectionContent]}>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.M]}>
            {productDetail.title}
          </Text>
          <Text
            style={[commonStyle.black, commonStyle.semiBold, commonStyle.M]}
          >
            IDR {productDetail.price}
          </Text>
        </View>
        <Text style={[commonStyle.black, commonStyle.regular, commonStyle.S]}>
          Regular
        </Text>

        {/* <View style={[style.contentRow, style.sectionContent]}>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.M]}>
            1 Pinky Promise
          </Text>
          <Text
            style={[commonStyle.black, commonStyle.semiBold, commonStyle.M]}
          >
            IDR 25.000
          </Text>
        </View>
        <Text style={[commonStyle.black, commonStyle.regular, commonStyle.S]}>
          Extra Large
        </Text>
        <View style={[style.contentRow, style.sectionContent]}>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.M]}>
            2 Choco Oreo
          </Text>
          <Text
            style={[commonStyle.black, commonStyle.semiBold, commonStyle.M]}
          >
            IDR 30.000
          </Text>
        </View>
        <Text style={[commonStyle.black, commonStyle.regular, commonStyle.S]}>
          Large
        </Text> */}
        <View style={[style.hr, style.sectionContent]} />
        <View style={[style.contentRow, style.sectionContent]}>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.M]}>
            Subtotal
          </Text>
          <Text
            style={[commonStyle.black, commonStyle.semiBold, commonStyle.M]}
          >
            IDR {productDetail.price}
          </Text>
        </View>
        <View style={[style.contentRow, style.subTitle]}>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.M]}>
            Tax
          </Text>
          <Text
            style={[commonStyle.black, commonStyle.semiBold, commonStyle.M]}
          >
            IDR 0.0
          </Text>
        </View>

        <View
          style={[style.contentRow, style.sectionContent, commonStyle.mb10per]}
        >
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.L]}>
            Total
          </Text>
          <Text style={[commonStyle.black, commonStyle.bold, commonStyle.L]}>
            IDR {productDetail.price}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "#6A4029",
            padding: 22,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          {/* <Text style={{ color: '#F6F6F9' }}>Save Product</Text> */}
          <Text
            color="#F6F6F9"
            align={"center"}
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Pay now
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
