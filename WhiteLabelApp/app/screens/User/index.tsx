import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

import { styles } from "./style";
import { users } from "./data.json";

interface User {
  userId: number;
  name: string;
  email: string;
}

const User = ({ navigation }: any) => {
  const userData: User[] = users;

  return (
    <View>
      <View style={styles.headerContainer}>
        <Feather
          name="menu"
          size={30}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>User Screen</Text>
      </View>
      <FlatList
        data={userData}
        keyExtractor={(user) => user.userId.toString()}
        renderItem={({ item: user }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("User-Detail", { id: user.userId })
            }
          >
            <Text style={styles.cardText}>{user.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default User;
