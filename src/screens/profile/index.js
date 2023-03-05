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
import { useState, useEffect } from "react";
import commonStyle from "../../styles/commonStyle";
import axios from "axios";

const style = StyleSheet.create({
  flexCenter: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: "2%",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: "1%",
  },
  sectionTitle: {
    color: "#6A4029",
    fontSize: 17,
    fontWeight: "700",
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
    marginTop: 4,
    marginBottom: 30,
  },
});

const ProfileScreen = () => {
  const [number, onChangeNumber] = React.useState("");
  const [text, onChangeText] = React.useState("");

  const [dataProfile, setDataProfile] = useState([]);
  // const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => setDataProfile(res.data.data))
      .catch((err) => console.log(err.message));
  });

  //patch profile
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profile_image, setProfile_Image] = useState("");

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setProfile_Image(file);
  };

  const handleUpdate = (event) => {
    // console.log(username);
    // console.log(Email);
    // console.log(phone);
    // console.log(password);
    // console.log(profile_image);
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("username", username);
    data.append("Email", Email);
    data.append("phone", phone);
    data.append("password", password);
    data.append("profile_image", profile_image);
    axios
      .patch(`http://localhost:5000/api/v1/users/${id}`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={commonStyle.bg}>
      <Image
        source={require("../../images/profilefoto.png")}
        style={{
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
          resizeMode: "contain",
        }}
      />
      <Pressable>
        <Image
          source={require("../../images/editbtn.png")}
          style={{
            width: "100%",
            position: "absolute",
            resizeMode: "contain",
            left: 30,
            top: -55,
          }}
        />
      </Pressable>
      <View style={[style.flexCenter]}>
        <Text style={[commonStyle.brown, style.title]}>Zulaikha</Text>
        <Text style={[commonStyle.brown, style.subTitle]}>
          zulaikha17@gmail.com
        </Text>
        <Text style={[commonStyle.brown, style.subTitle]}>+62 81348287878</Text>
        <Text style={[commonStyle.brown, style.subTitle]}>
          Iskandar Street Block A Number 102
        </Text>
      </View>
      <View style={commonStyle.mt2per}>
        <SafeAreaView>
          <Text style={[commonStyle.grey, style.subTitle]}>Name</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Name"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Email</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Email"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Phone Number</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Fill Your Phone"
            keyboardType="numeric"
          />
          <Text style={[commonStyle.grey, style.subTitle]}>Date of Birth</Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="DD/MM/YY"
            value={text}
          />
          <Text style={[commonStyle.grey, style.subTitle]}>
            Delivery Address
          </Text>
          <TextInput
            style={style.input}
            onChangeText={onChangeText}
            placeholder="Fill Your Delivery Location"
            value={text}
          />
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
              Save and Update
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
