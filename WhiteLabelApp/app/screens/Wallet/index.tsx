import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Branding from "@/app/component/Branding";

const Profile = () => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.cardText}>This is Wallet Screen</Text>
      </View>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 20 }}>
        Firebase Branding
      </Text>
      <Branding brand={"brandB"} />
    </>
  );
};

export default Profile;
