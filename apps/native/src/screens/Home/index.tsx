import { Text, View } from "react-native";
import React from "react";
import { getUsers } from "../../../../../packages/ui/src/apis/index";
export default function HomeScreen() {
  const result = getUsers();

  return (
    <View>
      <Text>{JSON.stringify(result, null, 2)}</Text>
    </View>
  );
}
