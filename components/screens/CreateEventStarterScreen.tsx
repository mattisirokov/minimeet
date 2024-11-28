import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient as ExpoGradient } from "expo-linear-gradient";
import { SocialDiagram } from "./SocialDialogue";

export default function CreateEventStarterScreen({
  onStartClick,
}: {
  onStartClick: () => void;
}) {
  return (
    <ExpoGradient colors={["#F3D9EF", "#fff"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Get in touch with your followers - with a Minimeet
          </Text>

          <Text style={styles.subtitle}>
            Connect, collaborate, and succeed with our powerful networking
            platform.
          </Text>

          <View style={styles.diagram}>
            <SocialDiagram />
          </View>

          <View style={styles.diagramFooter}>
            <TouchableOpacity
              onPress={() => {
                onStartClick();
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ExpoGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    lineHeight: 36,
    fontWeight: "700",
    color: "#2a2a39",
    marginBottom: 12,
    paddingRight: 24,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: "#434247",
  },
  diagram: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: "center",
  },
  diagramFooter: {
    paddingVertical: 12,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#4C164C",
    borderColor: "#4C164C",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.133,
  },
});
