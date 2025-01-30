import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabNavigtion";
import StackNavigator from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main-Bottom"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="User"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
