import { StyleSheet } from "react-native";

import UserHeader from "@/components/user-profile/UserHeader";

import { useAuth, useAuthenticatedUser } from "@/contexts/AuthContext";

export default function SettingsScreen() {
  const { signOut } = useAuth();
  const { userProfile } = useAuthenticatedUser();

  return <UserHeader user={userProfile} signOut={signOut} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
