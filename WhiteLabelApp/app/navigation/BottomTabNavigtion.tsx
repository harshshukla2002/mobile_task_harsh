import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Wallet from "../screens/Wallet";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={25} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="wallet" size={25} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <EvilIcons
              name="user"
              size={30}
              color={focused ? "blue" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
