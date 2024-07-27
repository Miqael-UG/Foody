import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const Splashscreen = () => {
  const navigation = useNavigation();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Splashscreen2");
    }, 3000);
  });
  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 200 }}
          source={require("../../assets/Logo.png")}
        />
      </View>
      <Animated.View style={[animatedStyle]}>
        <Image
          resizeMode="contain"
          style={{ width: 50 }}
          source={require("../../assets/Loader.png")}
        />
      </Animated.View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
