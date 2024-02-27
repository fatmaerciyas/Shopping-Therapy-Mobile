import React, { useEffect } from "react";
import { StyleSheet, ScrollView, View, Text, Dimensions } from "react-native";
import Video from "react-native-video";

const { width, height } = Dimensions.get("window");

const Slider: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPlaying((isPlaying) => !isPlaying);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      <View style={styles.slide}>
        <Video
          source={{ uri: "https://www.example.com/video.mp4" }}
          style={styles.image}
          resizeMode="cover"
          shouldPlay={isPlaying}
          isLooping
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "100%",
    height: height / 3,
  },
  slide: {
    width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Slider;
