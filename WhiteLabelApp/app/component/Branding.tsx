import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { db } from "../config/firebase.config";
import { ref, get } from "firebase/database";

interface BrandingProps {
  appName: string;
  logo: string;
  primaryColor: string;
}

const Branding = ({ brand }: any) => {
  const [branding, setBranding] = useState<BrandingProps | null>(null);

  useEffect(() => {
    const fetchBranding = async () => {
      try {
        const snapshot = await get(ref(db, `branding/${brand}`));
        if (snapshot.exists()) {
          setBranding(snapshot.val());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBranding();
  }, [brand]);

  return branding ? (
    <View
      style={[styles.container, { backgroundColor: branding.primaryColor }]}
    >
      <Image source={{ uri: branding.logo }} style={styles.logo} />
      <Text style={styles.text}>{branding.appName}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
    padding: 20,
  },
  logo: { width: 100, height: 100, borderRadius: 10 },
  text: { fontSize: 20, marginTop: 10 },
});

export default Branding;
