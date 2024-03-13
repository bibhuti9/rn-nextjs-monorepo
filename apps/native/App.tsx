import { View, Text } from "react-native";
import React from "react";
import { getQuote } from "@repo/ui";
export default function App() {
  const quote = getQuote();
  return (
    <View>
      <Text>{quote?.content}</Text>
    </View>
  );
}
