import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import Feather from "react-native-vector-icons/Feather";

import { styles } from "./style";

const Home = ({ navigation }: any) => {
  const randomCoordinates = [
    { latitude: 12.9716, longitude: 77.5946 },
    { latitude: 17.4065, longitude: 78.4772 },
    { latitude: 24.5362, longitude: 81.3037 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather
          name="menu"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
      <MapView style={styles.map}>
        {randomCoordinates.map((coord, index) => (
          <Marker key={index} coordinate={coord} />
        ))}
      </MapView>
    </View>
  );
};

export default Home;
