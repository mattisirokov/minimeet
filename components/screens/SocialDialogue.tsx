import { StyleSheet, View, Dimensions, Image } from "react-native";

import Svg, { Circle, LinearGradient, Stop } from "react-native-svg";
import Gradient from "react-native-linear-gradient";

import FeatherIcon from "@expo/vector-icons/Feather";

const { width } = Dimensions.get("window");

const elements = [
  {
    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    position: [0, 0],
    size: [90, 90],
  },
  {
    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    position: [-120, -120],
    size: [60, 60],
  },
  {
    uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    position: [120, 120],
    size: [60, 60],
  },
  {
    icon: "heart",
    position: [-120, 120],
    size: [60, 60],
  },
  {
    icon: "user-plus",
    position: [120, -120],
    size: [60, 60],
  },
];

const DIAGRAM_SIZE = width - 48;

export function SocialDiagram() {
  return (
    <View
      style={{
        width: DIAGRAM_SIZE,
        height: DIAGRAM_SIZE,
        position: "relative",
      }}
    >
      {elements.map(
        ({ position: [x, y], size: [width, height], uri, icon }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.element,
                {
                  width,
                  height,
                  top: DIAGRAM_SIZE / 2 - height / 2 + y,
                  left: DIAGRAM_SIZE / 2 - width / 2 + x,
                },
              ]}
            >
              {icon ? (
                <FeatherIcon name={icon as any} color="#DC89CD" size={24} />
              ) : (
                <Image
                  source={{ uri }}
                  style={styles.elementImage}
                  resizeMode="cover"
                />
              )}
            </View>
          );
        }
      )}
      <Svg viewBox="0 0 400 400">
        <Circle
          cx="200"
          cy="200"
          r="192"
          stroke="url(#linear_1)"
          strokeWidth="4"
          strokeDasharray="20 20"
          fill="transparent"
        />
        <Circle
          cx="200"
          cy="200"
          r="128"
          stroke="url(#linear_2)"
          strokeWidth="4"
          strokeDasharray="20 20"
          fill="transparent"
        />
        <LinearGradient
          id="linear_1"
          x1="78"
          y1="42"
          x2="312"
          y2="364"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D0B2CC" />
          <Stop offset="1" stopColor="#DC89CF" stopOpacity="1" />
        </LinearGradient>
        <LinearGradient
          id="linear_2"
          x1="139"
          y1="121"
          x2="256"
          y2="282"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D0B2CC" />
          <Stop offset="1" stopColor="#DC89CF" stopOpacity="1" />
        </LinearGradient>
      </Svg>
    </View>
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
  element: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: "#DC89CD",
    zIndex: 9,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  elementImage: {
    width: "100%",
    height: "100%",
    borderRadius: 9999,
  },
  /** Diagram */
  diagram: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    justifyContent: "center",
  },
  diagramFooter: {
    paddingVertical: 12,
  },
  /** Button */
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
  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    backgroundColor: "transparent",
    borderColor: "#4C164C",
    marginBottom: 12,
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#4C164C",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.133,
  },
});
