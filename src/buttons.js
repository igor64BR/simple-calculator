import styles from "./components/style";

const NaNKeys = {
  clear: "C",
  del: "←",
  split: "/",
  multiply: "*",
  subtract: "-",
  add: "+",
  submit: "=",
};

const btnTexts = [
  [NaNKeys.clear, NaNKeys.del, NaNKeys.split],
  [7, 8, 9, NaNKeys.multiply],
  [4, 5, 6, NaNKeys.subtract],
  [1, 2, 3, NaNKeys.add],
  [0, NaNKeys.submit],
];

const charStyles = [
  [styles.doubledButton],
  [],
  [],
  [],
  [styles.triplicatedButton],
];

const charObjs = btnTexts.map((charRow, rowIndex) =>
  charRow.reduce((acc, char, colIndex) => {
    acc[char] = charStyles[rowIndex][colIndex] || null;
    return acc;
  }, {})
);

export default charObjs;
export { NaNKeys };
