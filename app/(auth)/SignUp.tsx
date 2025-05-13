import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "@/data/Colors";

export default function SignUp() {
  return (
    <View style={{ paddingTop: 60, padding: 20 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Create New Account
      </Text>

      <View style={{ display: "flex", alignItems: "center" }}>
        <View>
          <Image
            source={require("../../assets/images/profile.png")}
            style={{ width: 100, height: 100, borderRadius: 99, marginTop: 20 }}
          />
          <Entypo
            name="camera"
            size={24}
            color={Colors.PRIMARY}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
    </View>
  );
}
