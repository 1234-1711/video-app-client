import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fetchVideos } from "../src/api";
import { Video } from "../src/types";

export default function ListScreen() {
  const [videos, setVideos] = useState<Video[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchVideos()
      .then(setVideos)
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push({ pathname: "/player", params: { ...item } })}
        >
          <Image source={{ uri: item.thumbnail }} style={styles.thumb} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.channel}>{item.channelTitle}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", padding: 10 },
  thumb: { width: 120, height: 90, borderRadius: 6 },
  title: { fontSize: 16, fontWeight: "bold" },
  channel: { fontSize: 14, color: "gray" },
});
