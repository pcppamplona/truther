import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";

import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter } from "expo-router";
import React from "react";

export default function Splash() {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const [videoError, setVideoError] = useState<boolean>(false);
  const router = useRouter();

  async function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        await SplashScreen.hideAsync();
      }

      if (status.didJustFinish) {
        router.replace("/(onboarding)/HomeScreen");
      }
    } else if (status.error) {
      setVideoError(true);
    }

    setStatus(() => status);
  }

  const handleImageLoad = async () => {
    await SplashScreen.hideAsync();
    router.replace("/HomeScreen"); 
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={StyleSheet.absoluteFill}>
        {!videoError && (
          <Video
            style={StyleSheet.absoluteFill}
            source={require("@/assets/videos/splash.mp4")}
            resizeMode={ResizeMode.COVER}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay
          />
        )}
        {/* {videoError && (
          <Image
            style={StyleSheet.absoluteFill}
            source={require("@/assets/images/splash.png")}
            onLoad={handleImageLoad}
          />
        )} */}
      </View>
    </>
  );
} 