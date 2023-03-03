import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/pages/Home";
import Details from "../components/pages/Details";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Root"
          options={{ headerShown: false }}
          component={Home}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "card" }}>
        <Stack.Screen
          name="Details"
          options={{ title: "DETALLES" }}
          component={Details}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};
export default Navigations;
