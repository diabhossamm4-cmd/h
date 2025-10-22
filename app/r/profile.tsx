// screens/Profile.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import AccountSwitch from "@/components/AccountSwitch";
import BagIcon from "@/components/ui/profile/bill";  
import MenuIcon from "@/components/ui/profile/MenuIcon";
import CustomIcon from "@/components/CustomIcon";
import ExportIcon from "@/components/ui/profile/ExportIcon";
import HelpIcon from "@/components/ui/profile/HelpIcon";
import DocumentEditIcon from "@/components/ui/profile/DocumentEditIcon";
import Camicon from "@/components/ui/profile/camicon";
import NameTagIcon from "@/components/ui/profile/NameTagIcon";
import { useRouter } from "expo-router";

type AccountMode = "personal" | "business";

const c = {
  bg: "#FFFFFF",
  brown: "#CCA884",
  sand: "#cca8849b",
  blue: "#8FB3FF",
  yellow: "#ffcb5c98",
  pink: "#FE6C6498",
  rowBg: "#F5F5F5",
  grayDivider: "#E5E7EB",
};

// Row component (اللي يعتمد على className)
type RowProps = {
  title: string;
  iconBg: string;
  icon: React.ReactNode;
  onPress?: () => void;
  className?: string;
};

function Row({ title, iconBg, icon, onPress, className = "" }: RowProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`mx-6 rounded-2xl px-4 py-4 flex-row items-center justify-between ${className}`}
      style={{ backgroundColor: c.rowBg }}
    >
      <View className="flex-row items-center">
        <View
          className="w-12 h-12 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </View>
        {/* هنا بنعتمد على className لو فيه font-bold أو غيره */}
        <Text
          className={`text-base ${
            className.includes("font-") ? "" : "font-medium text-black"
          }`}
        >
          {title}
        </Text>
      </View>
      <Feather name="chevron-right" size={25} color="#6b7280" />
    </Pressable>
  );
}

export default function Profile() {
  const [mode, setMode] = useState<AccountMode>("personal");
  const router = useRouter();


  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: c.bg }}>
      {/* زر الإغلاق */}
      <View className="absolute left-6 top-10 z-10">
        <TouchableOpacity onPress={() => router.push("/(tabs)/home/h")}>
          <Feather name="x" size={40} color={c.sand} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Avatar + الاسم + الحساب */}
        <View className="items-center mt-6">
          <View
            className="w-40 h-40 rounded-full items-center justify-center"
            style={{ backgroundColor: c.brown }}
          >
            <Text className="text-3xl font-bold text-black">JA</Text>

            {/* أيقونة الكاميرا الصغيرة */}
            <View
              className="absolute -right-1 -bottom-1 w-12 h-12 rounded-full items-center justify-center"
              style={{
                backgroundColor: c.brown,
                borderColor: "#fff",
                borderWidth: 1.5,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 3,
              }}
            >
              <Camicon size={35} />
            </View>
          </View>

          <Text className="mt-6 text-2xl font-bold text-black">
            HOSSAM DIAB
          </Text>
          <Text className="mt-1 text-base font-medium">
            {mode === "personal" ? "Personal account" : "Business account"}
          </Text>

          {/* Handle */}
          <View
            className="mt-3 px-4 py-1 rounded-full bg-[#cca8849a] flex-row items-center"
            // style={{ backgroundColor: c.sand }}
          >
            <NameTagIcon size={18} />
            <Text className="ml-2 font-medium text-black">@hosab</Text>
          </View>
        </View>

        {/* Account Switch */}
        <View className="mt-8 items-center">
          <AccountSwitch mode={mode} onChange={setMode} />
        </View>

        {/* عنوان القسم */}
        <Text className="mt-10 mb-3 px-6 text-2xl font-medium">
          Your Account
        </Text>

        {/* الصفوف */}
        <Row
          title="Notifications"
          iconBg={c.blue}
          icon={<BagIcon size={25} />}
          className="mb-5"
        />
        <Row
          title="Statements"
          iconBg={c.yellow}
          icon={<MenuIcon size={25} />}
          className="mb-5"
        />
        <Row
          title="Help"
          iconBg={c.pink}
          icon={<CustomIcon />}
          className="mb-5"
        />

        <Text className="mt-3 mb-3 px-6 text-2xl font-medium">
          Account actions and agreements
        </Text>
        <Row
          title="Log out"
          iconBg={c.sand}
          icon={<ExportIcon size={25} />}
          className="mb-5"
        />
        <Row
          title="About Us"
          iconBg={c.sand}
          icon={<HelpIcon size={25} />}
          className="mb-5"
        />
        <Row
          title="Agreements"
          iconBg={c.sand}
          icon={<DocumentEditIcon size={25} />}
          className="text-[22px]"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
