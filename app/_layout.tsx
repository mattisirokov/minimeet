import React, { useEffect } from 'react';

import { Stack } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from 'expo-splash-screen';

import { AuthProvider } from '@/contexts/AuthContext';
import { EventsAndDataProvider } from '@/contexts/EventsContext';

import { useFonts } from 'expo-font';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [error, loaded]);

  if (!loaded) return null;

  return (
    <AuthProvider>
      <EventsAndDataProvider>
        <RootLayoutNav />
      </EventsAndDataProvider>
    </AuthProvider>
  );
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
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack>
  );
}
