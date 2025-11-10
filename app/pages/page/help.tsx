import CustomPinIcon from "@/components/pages/Exchangerates";
import SearchIcon from "@/components/ui/SearchIcon";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Transaction item data type
interface TransactionItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  amount: string;
  currency: string;
}

// Frequently explored topic type
interface TopicItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  route?: string;
}

/**
 * HelpCenter Screen
 *
 * This screen matches the Figma design provided, featuring:
 * - A close (X) button at the top left.
 * - A prominent question heading.
 * - A styled search bar for FAQs and common issues.
 * - A section for displaying recent transaction issues, fetched from an API.
 * - A list of frequently explored topics.
 * - A call‑to‑action button to contact support.
 *
 * All colors and spacing are chosen to align with the application's neutral palette.
 */
export default function HelpCenter() {
  const router = useRouter();

  // State for recent transaction problems
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch transaction issues from API on mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Replace this URL with the actual endpoint returning recent issues
        const response = await axios.get<TransactionItem[]>(
          "https://example.com/api/problems"
        );
        setTransactions(response.data);
      } catch (err: any) {
        console.error("Failed to fetch transaction issues", err);
        setError("Unable to load recent issues. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  // List of help topics
  const topics: TopicItem[] = [
    {
      id: 1,
      label: "Exchange rates",
      icon: (
        <CustomPinIcon name="swap-horizontal-bold" size={3} color="#231F20" />
      ),
      route: "/help/exchange",
    },
    {
      id: 2,
      label: "Verification & Setup",
      icon: [
        <Ionicons name="person" size={36} color="#CCA889" />,
        <Ionicons
          name="scan-outline"
          size={28}
          color="#000"
          style={{ position: "absolute" }}
        />,
      ],

      route: "/help/verification",
    },
    {
      id: 3,
      label: "Failed Transactions",
      icon: <Feather name="x" size={36} color="#000" />,
      route: "/help/failed",
    },
    // {
    //   id: 3,
    //   label: "Failed Transactions",
    //   icon: [
    //     <Ionicons
    //       name="scan-outline"
    //       size={26}
    //       color="#000"
    //       style={{ position: "absolute" }}
    //     />,
    //     <Ionicons name="person" size={36} color="#CCA889" />,
    //   ],
    //   route: "/help/failed",
    // },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-5 justify-center pb-10">
          {/* Close / Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            // onPress={() => router.push("/(tabs)/home/h")}
            className="mb-6 w-8 h-8 items-center justify-center"
          >
            {/* Using two rotated lines to mimic the Figma X icon */}
            <View
              style={{
                position: "absolute",
                width: 24,
                height: 2,
                backgroundColor: "#CCA884",
                transform: [{ rotate: "45deg" }],
              }}
            />
            <View
              style={{
                position: "absolute",
                width: 24,
                height: 2,
                backgroundColor: "#CCA884",
                transform: [{ rotate: "-45deg" }],
              }}
            />
          </TouchableOpacity>

          {/* Heading */}
          <Text className="text-4xl font-medium text-black mb-5">
            How can we help?
          </Text>

          {/* Search Bar */}
          <View
            className="flex-row items-center rounded-2xl mb-6 px-4 py-3"
            style={{ borderWidth: 2, borderColor: "#CCA884" }}
          >
            <View className="w-7 h-7 rounded-full items-center justify-center">
              <SearchIcon size={24} />
            </View>
            <TextInput
              placeholder="Search FAQ and other common problems"
              placeholderTextColor="#A0A0A0"
              className="flex-1 ml-3 text-black text-base"
            />
          </View>

          {/* Recent Problems */}
          <Text className="text-[16px] font-medium text-black mb-2">
            Problem with recent transactions?
          </Text>
          <View className="w-full h-px bg-gray-300 mb-4" />
          {/* Loading, Error or Data states */}
          {loading && (
            <ActivityIndicator size="small" color="#CCA884" className="my-4" />
          )}
          {error && !loading && (
            <Text className="text-red-400 mb-4 text-sm">{error}</Text>
          )}
          {!loading && !error && transactions.length === 0 && (
            <Text className="text-gray-500 mb-4">No recent issues found.</Text>
          )}
          {!loading &&
            !error &&
            transactions.map((tx) => (
              <View
                key={tx.id}
                className="flex-row items-center rounded-3xl mb-3 px-4 py-4"
                style={{ backgroundColor: "#F8F8F7" }}
              >
                {/* Icon */}
                <View
                  className="w-12 h-12 rounded-full items-center justify-center mr-3"
                  style={{ backgroundColor: "#FE6C64" }}
                >
                  {/* Alert icon inside circle */}
                  <Ionicons name="alert" size={24} color="#FFFFFF" />
                </View>
                {/* Vertical divider */}
                <View
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    backgroundColor: "#CCA88433",
                    marginRight: 12,
                  }}
                />
                {/* Info */}
                <View className="flex-1">
                  <Text className="text-[10px] text-gray-500 uppercase mb-1">
                    {tx.date}
                  </Text>
                  <Text className="text-[15px] font-semibold text-black">
                    {tx.title}
                  </Text>
                  <Text className="text-[12px] text-gray-500">
                    {tx.subtitle}
                  </Text>
                </View>
                {/* Amount */}
                <Text className="text-[15px] font-medium text-black">
                  {tx.amount}
                </Text>
              </View>
            ))}

          {/* Frequently Explored Topics */}
          <Text className="text-[16px] font-medium text-black mb-2">
            Frequently Explored Topics
          </Text>
          <View className="w-full h-px bg-gray-300 mb-4" />
          {topics.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center rounded-3xl mb-3 px-4 py-4"
              style={{ backgroundColor: "#F5F5F5" }}
              onPress={() => {
                // if (item.route) router.push(item.route);
              }}
            >
              <View
                className="w-12 h-12 rounded-full items-center justify-center mr-3"
                style={{ backgroundColor: "#CCA88450" }}
              >
                {item.icon}
              </View>
              <Text className="flex-1 text-[15px] font-medium text-black">
                {item.label}
              </Text>
              <Feather name="chevron-right" size={22} color="#231F20" />
            </TouchableOpacity>
          ))}

          {/* <View className="flex-1 mb-9" />

          <View className="w-full h-[1px] justify-items-end  bg-gray-700 mb-6" />


          <TouchableOpacity
            // onPress={() => router.push("/help/contact-support")}
            className="mt-6 rounded-3xl px-4 py-4 items-center justify-center"
            style={{ backgroundColor: "#CCA88499" }}
          >
            <Text className="text-[16px] font-medium text-black">
              Contact Support
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>

      {/* Spacer */}
      <View className="flex-1 mb-2" />
<View className="px-6" >
      {/* Divider */}
      <View className="w-full h-[1px] justify-items-end  bg-gray-700 mb-4" />

      {/* Contact Support Button */}
      <TouchableOpacity
        // onPress={() => router.push("/help/contact-support")}
        className="mt-6 rounded-3xl px-4 py-4 mb-8 items-center justify-center"
        style={{ backgroundColor: "#CCA88499" }}
      >
        <Text className="text-[16px] font-medium text-black">
          Contact Support
        </Text>
      </TouchableOpacity></View>
    </SafeAreaView>
  );
}
