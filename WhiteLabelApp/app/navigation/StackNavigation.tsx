import { createStackNavigator } from "@react-navigation/stack";
import User from "../screens/User";
import UserDetails from "../screens/Detail User";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User-Detail"
        component={UserDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
