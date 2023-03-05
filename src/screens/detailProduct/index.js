//Default Import
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";

//import Style
import Style from "./style";
import GlobalStyle from "../../styles/GlobalStyle";

export default function ProductDetail({ route, navigation }) {
  const { id } = route.params;
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.100.152:5000/api/v1/product/${id}`)
      .then((res) => setProductDetail(res.data.data))
      .catch((err) => console.log(err.message));
  });

  // const img = `http://192.168.1.4:5000/upload/images/${productDetail.images[0].filename}`;

  return (
    <>
      <View style={GlobalStyle.bg}>
        <ScrollView>
          <View style={[GlobalStyle.flex, GlobalStyle.justifyCenter]}>
            <Image
              source={{
                uri: `http://192.168.100.152:5000/uploads/images/${
                  productDetail.images ? productDetail.images[0].filename : ""
                }`,
              }}
              style={{
                height: 200,
                width: 200,
                marginTop: 20,
                resizeMode: "contain",
                borderRadius: 100,
                resizeMode: "cover",
              }}
            />
          </View>

          <Image
            source={require("../../images/mark.png")}
            style={{
              width: "100%",
              marginTop: 50,
              marginBottom: 20,
              resizeMode: "contain",
            }}
          />
          <View style={[Style.flexCenter]}>
            <Text
              style={[
                GlobalStyle.black,
                GlobalStyle.bold,
                GlobalStyle.XL,
                Style.title,
              ]}
            >
              {/* {console.log(productDetail.images[0].filename)} */}
              {productDetail.title}
            </Text>
            <Text
              style={[
                GlobalStyle.brown,
                GlobalStyle.semiBold,
                GlobalStyle.L,
                Style.subTitle,
              ]}
            >
              Rp. {productDetail.price}
            </Text>
          </View>
          <Text
            style={[
              GlobalStyle.black,
              GlobalStyle.semiBold,
              GlobalStyle.L,
              Style.sectionTitle,
            ]}
          >
            Delivery info
          </Text>
          <Text
            style={[
              GlobalStyle.grey,
              GlobalStyle.semiBold,
              GlobalStyle.M,
              Style.subTitle,
            ]}
          >
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
          <Text
            style={[
              GlobalStyle.black,
              GlobalStyle.semiBold,
              GlobalStyle.L,
              Style.sectionContent,
            ]}
          >
            Description
          </Text>
          <Text
            style={[
              GlobalStyle.grey,
              GlobalStyle.semiBold,
              GlobalStyle.M,
              Style.subTitle,
            ]}
          >
            {productDetail.category}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Payment", { id: productDetail.id });
            }}
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
              Add to cart
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </>
  );
}
