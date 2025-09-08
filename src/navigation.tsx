import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailScreen from "./screens/DetailScreen";
import ListScreen from "./screens/ListScreen";
import { Video } from "./types";

// 👇 Define navigation param types
export type RootStackParamList = {
  List: undefined;
  Detail: { video: Video };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} options={{ title: "Videos" }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Watch" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

