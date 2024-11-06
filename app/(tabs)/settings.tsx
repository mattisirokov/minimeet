import { StyleSheet, Pressable } from "react-native";
import { View, Text } from "@/components/Themed";

import UserHeader from "@/components/user-profile/UserHeader";

import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";

export default function SettingsScreen() {
  const { signOut, userProfile, session } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push("/"); // TODO: Make this smoother --> roll it into a single function...
  };

  if (!userProfile || !session) {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => router.push("/login-modal")}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
    );
  }

  return <UserHeader user={userProfile} signOut={handleSignOut} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
