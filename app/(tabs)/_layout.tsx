// app/(tabs)/_layout.jsx
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="recipients" />
      <Tabs.Screen name="send" /> {/* الزرّ المركزي */}
      <Tabs.Screen name="transactions" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
