import React from "react";
import { View } from "react-native";
import styles from "./style";
import CustomButton from "./CustomButton";

export default function CalculatorRow({ buttons, onBtnClick }) {
  const keyRows = Object.keys(buttons).map((key, i) => {
    console.log(key, buttons[key]);
    return <CustomButton
      title={key}
      style={buttons[key]}
      key={i}
      onClick={onBtnClick}
    />;
  });

  return <View style={styles.row}>{keyRows}</View>;
}
