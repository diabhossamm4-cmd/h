import React from "react";
import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="h" />
      {/* أضف شاشات أخرى جوه Home هنا */}
    </Stack>
  );
}
