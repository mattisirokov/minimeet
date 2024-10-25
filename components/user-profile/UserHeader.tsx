import { View, Text, Button } from "react-native";

import { useAuth } from "@/contexts/AuthContext";

const UserHeader = () => {
  const { user, signOut } = useAuth();

  return (
    <View>
      <Text>{user?.email}</Text>
      <Button title="Log out" onPress={() => signOut()} />
    </View>
  );
};

export default UserHeader;
