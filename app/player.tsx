import { useLocalSearchParams } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function PlayerScreen() {
  const { id, title, channelTitle } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={Dimensions.get("window").width * 0.56}
        play={true}
        videoId={id as string}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.channel}>{channelTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  channel: { fontSize: 14, color: "gray", marginTop: 4 },
});
