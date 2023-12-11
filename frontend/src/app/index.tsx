import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

SplashScreen.preventAutoHideAsync();

import {Navigation} from "./navigators/Navigation";

function App() {
  // (AppLoading);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={styleSheet.container}
      onLayout={onLayoutRootView}
    >
      <Navigation />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// registerRootComponent(App);
export default App;
