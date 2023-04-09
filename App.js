import { StyleSheet, View } from 'react-native';
import CalculatorBody from "./src/components/CalculatorBody"

export default function App() {
  return (
    <View style={styles.main}>
      <CalculatorBody />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center"
  }
});
