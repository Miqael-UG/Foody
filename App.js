import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splashscreen from "./src/screens/Splashscreen";
import { useEffect, useState } from "react";
import Splashscreen2 from "./src/screens/Splashscreen2";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding1 from "./src/screens/Onboarding1";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  // <View style={styles.container}>
  //   {isLoading ? <Splashscreen /> : <Splashscreen2 />}
  // </View>
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Splashscreen2" component={Splashscreen2} />
        <Stack.Screen name="Onboarding" component={Onboarding1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
