import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth } = Dimensions.get("window");

const Onboarding1 = ({ navigation }) => {
  const carouselRef = useRef(null); // Create a ref for the carousel

  const slides = [
    {
      title: "Order for Food",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: require("../../assets/onboarding1.png"), // Ensure these paths are correct
    },
    {
      title: "Easy Paymnet",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: require("../../assets/onboarding2.png"),
    },
    {
      title: "Fast Delivery",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: require("../../assets/onboarding3.png"),
    },
  ];

  const handleButtonPress = () => {
    if (carouselRef.current) {
      carouselRef.current.getCurrentIndex().then((index) => {
        if (index === slides.length - 1) {
          // Navigate to HomeScreen if it's the last slide
          navigation.navigate("HomeScreen");
        } else {
          // Swipe to the next slide
          carouselRef.current.scrollToIndex(index + 1); // Swipe to the next slide
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef} // Assign ref to the carousel
        loop={false} // You can set this to true if you want the carousel to loop
        width={screenWidth}
        height={screenWidth * 1.5} // Adjust height based on your design
        autoPlay={false}
        data={slides}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                paddingHorizontal: 30,
              }}
            >
              {item.info}
            </Text>
            <View style={styles.indicatorContainer}>
              {slides.map((_, i) => (
                <View
                  key={i}
                  style={
                    i === index ? styles.indicator : styles.indicatorInactive
                  }
                />
              ))}
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
  },
  slide: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: undefined,
    aspectRatio: 1, // Maintain aspect ratio
  },
  text: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1BAC4B",
    textAlign: "center",
    marginVertical: 20, // Add some space between image and text
  },
  indicatorContainer: {
    marginTop: 50,
    flexDirection: "row",
  },
  indicator: {
    width: 30,
    height: 10,
    backgroundColor: "#1BAC4B",
    borderRadius: 5,
    margin: 5,
  },
  indicatorInactive: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 5,
    margin: 5,
  },
  button: {
    height: 60,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#1BAC4B",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Onboarding1;
