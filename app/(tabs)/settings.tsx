import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import UserHeader from "@/components/user-profile/UserHeader";

import { useAuth } from "@/contexts/AuthContext";

export default function SettingsScreen() {
  const { user, signOut } = useAuth();

  return <UserHeader user={user} signOut={signOut} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
