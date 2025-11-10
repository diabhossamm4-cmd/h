// app/r/recipients.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import SearchIcon from "@/components/ui/SearchIcon";
import CustomIcon from "@/components/CustomIcon";
import BagIcon from "@/components/ui/profile/bill";
import { useRouter } from "expo-router";

const c = {
  bg: "#FFFFFF",
  brown: "#CCA88498",
  yellow: "#FFD56F",
  blue: "#8FB3FF",
  pink: "#FE6C64",
  gray: "#6B7280",
  lightGray: "#F5F5F5",
};

// بيانات المستخدمين (Mock)
const recipients = [
  {
    initials: "AM",
    name: "Aaron Moore",
    account: "GBP Account ending in 2444",
    flag: "🇬🇧",
    active: true,
  },
  {
    initials: "AP",
    name: "Adam Phoenix",
    account: "Jaudi Account",
    flag: "⚫",
    active: true,
  },
  {
    initials: "JM",
    name: "Jack Mikel",
    account: "Jaudi Account",
    flag: "⚫",
    active: false,
  },
  {
    initials: "PJ",
    name: "Phillip Johnson",
    account: "SLL Account ending in 1033",
    flag: "🇸🇱",
    active: true,
  },
];

// ✅ صف المستلم الواحد
const RecipientRow = ({ item }: any) => (
  <View
    className="mx-6 mb-4 flex-row justify-between items-center rounded-3xl px-4 py-4"
    style={{
      backgroundColor: "#F9F9F9",
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 3,
    }}
  >
    {/* اليسار */}
    <View className="flex-row items-center flex-shrink">
      <View
        className="w-14 h-14 rounded-full items-center justify-center mr-3"
        style={{ backgroundColor: "#CCA88480" }}
      >
        <Text className="font-bold text-[16px] text-black">
          {item.initials}
        </Text>
      </View>
      <View>
        <Text className="font-bold text-[15px] text-black">{item.name}</Text>
        <Text className="text-gray-600 text-[13px]">{item.account}</Text>
      </View>
    </View>

    {/* اليمين */}
    <TouchableOpacity
      className="px-5 py-2 rounded-2xl"
      style={{ backgroundColor: "#CCA88480" }}
    >
      <Text className="font-semibold text-black">Send</Text>
    </TouchableOpacity>
  </View>
);

export default function Recipients() {
  const router = useRouter();
  const [showActive, setShowActive] = useState(false);

  const filteredRecipients = showActive
    ? recipients.filter((r) => r.active)
    : recipients;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 mt-2">
        <TouchableOpacity onPress={() => router.push("/r/profile")}>
          <View
            className="w-12 h-12 rounded-full items-center justify-center"
            style={{ backgroundColor: c.brown }}
          >
            <Text className="font-bold text-sm text-black">HD</Text>
          </View>
        </TouchableOpacity>

        <View
          className="flex-auto mx-3 flex-row items-center rounded-2xl px-4 py-2"
          style={{
            // backgroundColor: "#F8F6F2",
            borderColor: c.brown,
            borderWidth: 2,
          }}
        >
          <View className="flex-row items-center">
            <SearchIcon size={20} />
          </View>
          <Text className="text-[#00000033] font-regular text-2xl  ml-2">
            |
          </Text>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#6B6B6B"
            className="flex-1 ml-2 text-black"
          />
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3 relative">
            <BagIcon size={20} color="white" />
            <View className="absolute -top-1 -right-1 bg-[#CDAA87] rounded-full w-4 h-4 items-center justify-center">
              <Text className="text-[9px] text-white font-semibold">8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="rounded-full px-2 py-[4px] flex-row items-center">
              <CustomIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Add recipient */}
      <TouchableOpacity
        className="mx-8 mt-8 flex-row items-center justify-center rounded-3xl py-2"
        style={{
          borderColor: "#CCA88499",
          borderWidth: 1,
          backgroundColor: "#CCA88443",
        }}
      >
        <View
          className="w-12 h-12 rounded-full  items-center justify-center "
          style={{ backgroundColor: c.brown }}
        >
          <Feather name="user-plus" size={25} color="black" />
        </View>

        <Text className="font-semibold text-xl text-black px-12 ">
          Add a recipient
        </Text>
      </TouchableOpacity>

      {/* Active Filter */}
      <View className="flex-row justify-between items-center px-6 mt-6">
        <TouchableOpacity
          onPress={() => setShowActive(!showActive)}
          className="flex-row items-center rounded-3xl px-5 py-2"
          style={{ backgroundColor: "#CCA88440" }}
        >
          <View
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: showActive ? "#00C853" : "#ccc" }}
          />
          <Text className="text-black font-medium">Show active only</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="filter" size={22} color="#CCA884" />
        </TouchableOpacity>
      </View>

      {/* قائمة Recipients */}
      <FlatList
        data={filteredRecipients}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <RecipientRow item={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View className="mt-8 mb-12 items-center">
            <TouchableOpacity
              className="rounded-2xl px-20  py-3"
              style={{
                borderColor: "#CCA884",
                borderWidth: 1,
                backgroundColor: "#CCA88453",
              }}
            >
              <Text className="font-medium text-lg text-black">
                Sync Mobile Contacts
              </Text>
            </TouchableOpacity>
          </View>
        }
        className="mt-4"
      />
    </SafeAreaView>
  );
}
