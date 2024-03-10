import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./routes";
import HomeScreen from "../screens/Home";
import AddTask from "../screens/AddTask";
import { navigationRef } from "../utils/navigation";
import { lightColor } from "../theme/colors";

const Stack = createStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: lightColor.primaryDark,
          },
        }}
      >
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
        <Stack.Screen name={Routes.AddTask} component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
