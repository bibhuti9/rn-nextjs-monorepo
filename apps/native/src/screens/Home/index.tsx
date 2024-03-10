import { View } from "react-native";
import React from "react";
import { Button } from "@repo/ui";

import { Routes } from "../../navigation/routes";
import Icon from "react-native-vector-icons/Feather";
import { push } from "@utils/navigation";
export default function HomeScreen() {
  return (
    <View>
      <Icon name="plus" size={30} />
      <Button
        text="Navigate to add task"
        onClick={() => push({ screenName: Routes.AddTask })}
      />
    </View>
  );
}
