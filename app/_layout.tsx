import { useEffect } from "react";

import { Stack } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "@/contexts/AuthContext";
import { EventsAndDataProvider } from "@/contexts/EventsContext";

import { useAuth } from "@/contexts/AuthContext";
import { useEvents } from "@/contexts/EventsContext";

import { useFonts } from "expo-font";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) return null;

  return (
    <AuthProvider>
      <EventsAndDataProvider>
        <RootLayoutWithData />
      </EventsAndDataProvider>
    </AuthProvider>
  );
}

function RootLayoutWithData() {
  const { status: authLoadingStatus } = useAuth();

  useEffect(() => {
    async function hideSplashScreen() {
      try {
        const isAuthLoadingComplete = authLoadingStatus !== "fetching";
        const isError = authLoadingStatus === "error";

        if (isError) {
          console.error("Error loading initial data");
          await SplashScreen.hideAsync();
          return;
        }

        if (isAuthLoadingComplete) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.error("Error hiding splash screen:", error);
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [authLoadingStatus]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="meet/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login-modal"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
