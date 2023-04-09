import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function CustomButton({ title, onClick, style }) {
  return (
    <TouchableOpacity
      onPressIn={() => onClick(title)}
      style={style ?? styles.singleButton}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
