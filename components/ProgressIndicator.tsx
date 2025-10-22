import React from "react"
import { View, StyleSheet } from "react-native"

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          <View style={[styles.step, index < currentStep ? styles.activeStep : styles.inactiveStep]} />
          {index < totalSteps - 1 && (
            <View
              style={[styles.connector, index < currentStep - 1 ? styles.activeConnector : styles.inactiveConnector]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  step: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  activeStep: {
    backgroundColor: "#c4a484",
  },
  inactiveStep: {
    backgroundColor: "#e0e0e0",
  },
  connector: {
    width: 40,
    height: 2,
    marginHorizontal: 4,
  },
  activeConnector: {
    backgroundColor: "#c4a484",
  },
  inactiveConnector: {
    backgroundColor: "#e0e0e0",
  },
})

export default ProgressIndicator
