import { View, Text } from "react-native";
import React from "react";
import { Button } from "@repo/ui";
import { push } from "../../utils/navigation";
import { Routes } from "../../navigation/routes";

export default function HomeScreen() {
  return (
    <View>
      <Button
        text="Navigate to add task"
        onClick={() => push({ screenName: Routes.AddTask })}
      />
    </View>
  );
}
