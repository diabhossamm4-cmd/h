import { View, Text, Image, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRef } from "react";

const slides = [
  {
    key: "one",
    title: "SEE HOW FAST YOUR\n MONEY CAN MOVE",
    text: "Transfer in a heartbeat.\n All money, no fees.",
    images: {
      background: require("@/assets/images/1a.gif"), // الصورة الخلفية (شفافة)
      overlay: require("@/assets/images/11.gif"), // الصورة الأمامية
    },
  },
  {
    key: "two",
    title: "GROW YOUR WEALTH\n OR SAVE FOR A SUNNY\n DAY",
    text: "Let's get your money\n working harder for you.",
    images: {
      background: require("@/assets/images/1a.gif"),
      overlay: require("@/assets/images/2a.gif"),
    },
  },
  {
    key: "three",
    title: "FOLLOW YOUR MONEY \n FROM A TO B",
    text: "Stay connected to your\n money always, with easy\n tracking.",
    images: {
      background: require("@/assets/images/3a.gif"),
      overlay: require("@/assets/images/13.gif"),
    },
  },
];

export default function Intro() {
  const router = useRouter();
  const sliderRef = useRef(null);

  const finishIntro = async () => {
    await AsyncStorage.setItem("seenIntro", "true");
    router.replace("/final-intro");
  };

  const renderItem = ({ item, index }) => (
    <View className="flex-1 items-center justify-center p-5">
      <View
        className="w-[350px] h-[490px] justify-center items-center my-5 bg-[#E0E0E0] rounded-lg p-5"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text className="text-[28px] font-bold text-center text-black mb-[100px]">
          {item.title}
        </Text>

        <Image
          source={item.images.background}
          style={{
            width: 455,
            height: 455,
            position: "absolute",
            opacity: 0.5,
          }}
        />
        <Image
          source={item.images.overlay}
          style={{
            width: 272,
            height: 272,
            position: "absolute",
            // opacity: 0.5,
          }}
        />

        <Text className="text-[24px] text-center text-black font-medium mt-[100px]">
          {item.text}
        </Text>

        <View className="flex-row justify-start items-center w-full mt-[55px] pl-5">
          {slides.map((_, i) => (
            <View
              key={i}
              className={`h-1 rounded-full mx-1.5 ${
                i === index
                  ? "w-[60px] bg-[#C19A6B] opacity-100"
                  : "w-[25px] bg-[#E0D5C0] opacity-70"
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );

  const renderPagination = (activeIndex) => (
    <View className="absolute bottom-10 w-full items-center">
      <TouchableOpacity
        className="bg-[rgba(204,168,132,0.2)] py-3 px-[90px] rounded-[25px] border border-[#E0D5C0]"
        onPress={() =>
          activeIndex === slides.length - 1
            ? finishIntro()
            : sliderRef.current?.goToSlide(activeIndex + 1, true)
        }
      >
        <Text className="text-base font-medium text-black">
          {activeIndex === slides.length - 1 ? "Get Started" : "Get Started"}
        </Text>
      </TouchableOpacity>
                <View className="w-full h-[0px] bg-black mb-6" />
                <View className="w-full h-[0px] bg-black mb-6" />
      
    </View>
  );

  return (
    <AppIntroSlider
      ref={sliderRef}
      data={slides} 
      renderItem={renderItem}
      renderPagination={renderPagination}
    />
  );
}
