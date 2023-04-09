import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import CalculatorRow from "./CalculatorRow";
import buttons from "../buttons";
import { NaNKeys } from "../buttons";

export default function CalculatorBody() {
  const [inputText, setInputText] = useState("");

  const submit = () => {
    const result = eval(inputText);
    console.log(inputText, result);
    setInputText(eval(inputText));
  };

  const keyBindings = {
    [NaNKeys.del]: () => setInputText(inputText.slice(0, -1)),
    Backspace: () => setInputText(inputText.slice(0, -1)),
    [NaNKeys.clear]: () => setInputText(""),
    Escape: () => setInputText(""),
    [NaNKeys.submit]: submit,
    Enter: submit,
  };

  const handleButtonClick = (key) => {
    if (keyBindings.hasOwnProperty(key)) {
      keyBindings[key]();
    } else {
      setInputText((prev) => prev + key);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.input}>
        <Text value={inputText} style={styles.inputText}>
          {inputText}
        </Text>
      </View>
      {buttons.map((obj, idx) => (
        <CalculatorRow buttons={obj} key={idx} onBtnClick={handleButtonClick} />
      ))}
    </View>
  );
}
