import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "75%",
    height: "70%",

    borderWidth: 10,
    borderRadius: 50,
    borderColor: "#865DFF",

    padding: 10,

    backgroundColor: "#E384FF",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "15%",
  },

  button: {
    flexGrow: 1,
    height: "100%",
    marginHorizontal: 8,
  },

  input: {
    backgroundColor: "#865DFF",
    height: "10%",
    borderRadius: 30,
    padding: 20,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  inputText: {
    fontFamily: "Courier",
    fontSize: 24,
    fontWeight: "bold",
  },
});

const singleButton = StyleSheet.compose(styleSheet.button, {});
const doubledButton = StyleSheet.compose(styleSheet.button, { flexGrow: 2 });
const triplicatedButton = StyleSheet.compose(styleSheet.button, {
  flexGrow: 3,
});

export default {
  ...styleSheet,
  singleButton,
  doubledButton,
  triplicatedButton,
};
