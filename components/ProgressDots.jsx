import React from "react";
import { View } from "react-native";

export default function ProgressDots({ stepsCount, currentStep }) {
  return (
    <View className="flex-row items-center ml-[35px] mr-[25px]">
      {Array.from({ length: stepsCount }).map((_, idx) => (
        <React.Fragment key={idx}>
          {/* Dot */}
          <View
            className={`w-4 h-4 rounded-full z-10 
              ${idx < currentStep ? "bg-[#cca884b1]" : "bg-[#E0E0E0] opacity-80"}`}
          />
          {/* Connector */}
          {idx < stepsCount - 1 && (
            <View
              className={`w-[34px] h-[5px] rounded-md mx-[-3px]  
                ${idx < currentStep - 1 ? "bg-[#cca884b1]" : "bg-[#E0E0E0] opacity-70"}`}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}
