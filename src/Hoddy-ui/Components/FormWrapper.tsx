import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { FormWrapperProps } from "../types";
const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  behavior = "position",
  contentContainerStyle,
  mode = "scroll",
  keyboardVerticalOffset = 50,
  style = {},
  onScroll,
}) => {
  const styles = ScaledSheet.create({
    root: {
      width: "100%",
      flex: 1,
      ...style,
    },
  });
  return mode === "static" ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={behavior}
        contentContainerStyle={styles.root}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  ) : (
    <ScrollView
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={40}
      keyboardDismissMode="interactive"
      contentContainerStyle={contentContainerStyle}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        behavior={behavior}
        style={styles.root}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default FormWrapper;
