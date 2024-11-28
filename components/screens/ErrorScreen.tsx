import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";

export default function ErrorScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <FeatherIcon color="#1D2A32" name="chevron-left" size={30} />
          </View>

          <Text style={styles.title}>Remember login info?</Text>

          <Text style={styles.subtitle}>
            We'll remember the login info for your account, so you won't need to
            enter it on your iCloud devices.
          </Text>
        </View>

        <View style={styles.form}>
          <Image
            alt=""
            style={styles.formImg}
            source={{
              uri: "https://assets.withfra.me/Permissions.3.png",
            }}
          />

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Remember</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btnSecondary}>
                <Text style={styles.btnSecondaryText}>Not now</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  /** Header */
  header: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: "relative",
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingHorizontal: 24,
  },
  formImg: {
    marginTop: 24,
    alignSelf: "center",
    width: 350,
    height: 350,
  },
  formAction: {
    marginTop: "auto",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#075eec",
    borderColor: "#075eec",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  btnSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#C8D3D9",
    marginTop: 12,
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#1D2A32",
  },
});
