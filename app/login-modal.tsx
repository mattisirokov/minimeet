import { View, StyleSheet } from "react-native";
import LoginSignUpForm from "@/components/authentication/LoginSignUpForm";

const LoginModal = () => {
  return (
    <View style={styles.container}>
      <LoginSignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginModal;
