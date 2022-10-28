import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StorybookUIRoot } from "./storybook";
import { Provider as PaperProvider } from "react-native-paper";
import Card from "./Components/Card";

const App = () => {
  return (
    <PaperProvider>
      <Card />
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
    </PaperProvider>
  );
};

export default App;
// export default StorybookUIRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
