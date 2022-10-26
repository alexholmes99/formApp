import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StorybookUIRoot } from "./storybook";
import Config from "react-native-config";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Config.LOAD_STORYBOOK === "true" ? StorybookUIRoot : App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
