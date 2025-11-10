// app/(tabs)/settings/index.tsx
// Settings screen based on the provided Figma design
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProfileIcon from "@/assets/icons/settings/ProfileIcon"; // تأكد من المسار الصحيح
import RecipientIcon from "@/assets/icons/settings/RecipientIcon"; // تأكد من المسار الصحيح
import WalletIcon from "@/assets/icons/settings/WalletIcon"; // تأكد من المسار الصحيح
import CloseIcon from "@/assets/icons/settings/CloseIcon"; // تأكد من المسار الصحيح
import GlobeIcon from "@/assets/icons/settings/GlobeIcon"; // تأكد من المسار الصحيح

// Colour palette matching the existing screens
const c = {
  bg: "#FFFFFF", // screen background
  sectionDivider: "#E5E7EB", // light divider for section titles
  cardBg: "#E0E0E033", // background for each settings row
  iconBg: "#CCA88459", // background behind icons
  primary: "#CCA884", // primary brand colour used in other screens
};

// Reusable row component for each settings option
function SettingsRow({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="mb-4 mx-6 flex-row items-center justify-between"
      style={{
        backgroundColor: c.cardBg,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 8,
      }}
    >
      <View className="flex-row items-center">
        <View
          className="w-14 h-14 mr-4 rounded-full items-center justify-center"
          style={{ backgroundColor: c.iconBg }}
        >
          {icon}
        </View>
        <Text className="text-sm font-medium ml-4 text-black">{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#6b7280" />
    </TouchableOpacity>
  );
}

export default function Settings() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: c.bg }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Page Heading */}
        <Text className="mt-12 mb-6 px-6 text-[45px] font-medium text-black">
          Settings
        </Text>

        {/* Manage Account section */}
        <View className="px-6">
          <Text className="text-2xl font-medium mb-2">Manage Account</Text>
          <View
            style={{ height: 1, backgroundColor: c.sectionDivider }}
            className="mb-4"
          />
        </View>
        <SettingsRow
          title="Personal Details"
          icon={<ProfileIcon size={30} />}
          onPress={() => router.push("/pages/settings/personalpage")}
          // onPress={() => router.push("/")}
        />

        <SettingsRow
          title="Privacy & Security"
          icon={<RecipientIcon />}
          // onPress={() => router.push("/settings/privacy-security")}
        />
        <SettingsRow
          title="Payment Methods"
          icon={<WalletIcon />}
          // onPress={() => router.push("/settings/payment-methods")}
        />

        {/* Other Account Actions section */}
        <View className="px-6 mt-6">
          <Text className="text-2xl font-medium mb-2">
            Other Account Actions
          </Text>
          <View
            style={{ height: 1, backgroundColor: c.sectionDivider }}
            className="mb-4"
          />
        </View>
        <SettingsRow
          title="Delete Account"
          icon={<CloseIcon size={30} />}
          // onPress={() => router.push("/settings/delete-account")}
        />

        {/* Other section */}
        <View className="px-6 mt-6">
          <Text className="text-2xl font-medium mb-2">Other</Text>
          <View
            style={{ height: 1, backgroundColor: c.sectionDivider }}
            className="mb-4"
          />
        </View>
        <SettingsRow
          title="Language"
          icon={<GlobeIcon size={30} />}
          // onPress={() => router.push("/settings/language")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
