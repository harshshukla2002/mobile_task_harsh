import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import Feather from "react-native-vector-icons/Feather";

import { styles } from "./style";

const Home = () => {
  const randomCoordinates = [
    { latitude: 12.9716, longitude: 77.5946 },
    { latitude: 37.7749, longitude: -122.4194 },
    { latitude: 40.7128, longitude: -74.006 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather name="menu" size={30} />
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
