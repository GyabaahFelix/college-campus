import Button from "@/components/Shared/Button";
import TextInputField from "@/components/Shared/TextInputField";
import Colors from "@/data/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function SignUp() {
  const [profileImage, setProfileImage] = useState<string | undefined>();
  const [fullName, setFullName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const onBtnPress = () => {};

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

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
          <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.profileImage}
            />
          )}
          <Entypo
            name="camera"
            size={24}
            color={Colors.PRIMARY}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
          </TouchableOpacity>
        </View>
      </View>

      <TextInputField label="Full Name" onChangeText={(v) => setFullName(v)} />
      <TextInputField label="Email" onChangeText={(v) => setEmail(v)} />
      <TextInputField
        label="Password"
        password={true}
        onChangeText={(v) => setPassword(v)}
      />

      <Button text="Create Account" onPress={() => onBtnPress()} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
     width: 100,
                height: 100,
                borderRadius: 99,
                marginTop: 20,
  },
})
