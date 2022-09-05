import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

// const PrimaryButton = (props) => {
//   return (
//     <View>
//       <Text>{props.children}</Text>
//     </View>
//   );
// };

const PrimaryButton = ({ children, onPress }) => {
  // const pressedHandler = () => {
  //   onPress();
  // };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        } // pressed is taken out via {} from "pressData"
        onPress={onPress} /* from props */
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "black", // iOS
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
