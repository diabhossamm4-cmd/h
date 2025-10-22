import React from "react";
import { Stack } from "expo-router";

export default function SendStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      {/* أضف شاشات أخرى جوه Home هنا */}
    </Stack>
  );
}
