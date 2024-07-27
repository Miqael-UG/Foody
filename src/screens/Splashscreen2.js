import { View, Text, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Splashscreen2 = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 4000);
  });
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      source={require("../../assets/Bg-image.png")}
    >
      <LinearGradient
        colors={["#A4A4A400", "#000000DA"]}
        style={{
          width: "100%",
          flex: 0.6,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 38,
            color: "#46D375",
            fontWeight: "bold",
          }}
        >
          Welcome to
        </Text>
        <Text style={{ fontSize: 38, color: "#46D375", fontWeight: "bold" }}>
          Foodu! 👋
        </Text>
        <Text
          style={{
            marginTop: 15,
            fontSize: 17,
            color: "#B4B4B4",
            fontWeight: "bold",
            textAlign: "center",
            fontWeight: "400",
            lineHeight: 25,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Splashscreen2;
