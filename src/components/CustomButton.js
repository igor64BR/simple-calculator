import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

//title={key} style={buttons[key]} key={i} onClick={onBtnClick}
export default function CustomButton({ title, onClick, style }) {
  return (
    <View style={style || styles.singleButton}>
      <TouchableOpacity onPressIn={onClick}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
