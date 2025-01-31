import { View, Text } from "react-native";
import React from "react";

import { users } from "../User/data.json";
import { styles } from "./style";

interface User {
  userId: number;
  name: string;
  email: string;
}

const UserDetails = ({ route }: any) => {
  const { id } = route.params;
  const userData: User[] = users;

  return (
    <View style={styles.card}>
      {userData.map((user: User) => {
        if (user.userId === id)
          return (
            <View key={user.userId}>
              <Text style={styles.cardText}>User Id: {user.userId}</Text>
              <Text style={styles.cardText}>Name: {user.name}</Text>
              <Text style={styles.cardText}>Email: {user.email}</Text>
            </View>
          );
      })}
    </View>
  );
};

export default UserDetails;
