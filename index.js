import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json"; // Ensure this path is correct

AppRegistry.registerComponent(appName, () => App);
