import axios from "axios";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "../../components/commons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

export default function Payment() {
  return (
    <>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <View style={{ padding: 15, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Payment Methods
          </Text>

          <Image
            source={require("../../images/paycard.png")}
            alignSelf={"center"}
            style={{
              width: "70%",
              height: "30%",
              zIndex: 2,
              resizeMode: "contain",
            }}
          />
          <View
            style={{
              borderBottomColor: "#9F9F9F",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 15,
            }}
          />
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    1 Hazelnut Latte
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16 }}>Regular</Text>
                </View>
              </View>
              <View style={{ display: "flex", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  IDR 20.000
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    1 Pinky Promise
                  </Text>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16 }}>Regular</Text>
                </View>
              </View>
              <View style={{ display: "flex", justifyContent: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  IDR 20.000
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#9F9F9F",
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Subtotal
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  IDR 20.000
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tax</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  IDR 20.000
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <View style={{ marginBottom: 15 }}>
                  <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                    Total
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                  IDR 20.000
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: "#6A4029",
              padding: 22,
              borderRadius: 20,
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
        </View>
      </SafeAreaView>
    </>
  );
}
