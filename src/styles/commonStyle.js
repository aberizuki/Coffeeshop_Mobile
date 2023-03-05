import { StyleSheet } from "react-native";

const commonStyle = StyleSheet.create({
  // margin
  mt20: {
    marginTop: 20,
  },
  mt2per: {
    marginTop: "5%",
  },
  mb10per: {
    marginBottom: "10%",
  },
  mb2per: {
    marginBottom: "-10%",
  },
  mlBase: {
    marginLeft: 50,
  },
  bg: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  // end margin

  //color
  brown: {
    color: "#6A4029",
  },
  black: {
    color: "#323232",
  },
  grey: {
    color: "#727272",
  },
  // end color

  //font weight
  regular: {
    fontWeight: "500",
  },
  semiBold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "700",
  },
  //end font weight

  //text size
  XL: {
    fontSize: 28,
  },
  L: {
    fontSize: 24,
  },
  M: {
    fontSize: 18,
  },
  S: {
    fontSize: 16,
  },
  XS: {
    fontSize: 14,
  },
  //end text size
});

export default commonStyle;
