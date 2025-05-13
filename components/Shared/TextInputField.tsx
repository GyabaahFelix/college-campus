import Colors from "@/data/Colors";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type TextInputFieldProps = {
  label: string;
  onChangeText?: (text: string) => void;
  password?: boolean;
};
export default function TextInputField({
  label,
  onChangeText,
  password = false,
}: TextInputFieldProps) {
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ color: Colors.GRAY }}>{label}</Text>
      <TextInput
        placeholder={label}
        style={styles.textInput}
        secureTextEntry={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.2,
    marginTop: 5,
    fontSize: 16,
  },
});
