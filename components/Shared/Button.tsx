import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/data/Colors";

type ButtonProps = {
  text: string;
  onPress: () => void;
};

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: Colors.WHITE,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
