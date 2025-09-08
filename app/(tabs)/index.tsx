import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { fetchVideos } from "../../src/api";
import { Video } from "../../src/types";

export default function HomeScreen() {
  const [videos, setVideos] = useState<Video[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchVideos().then(setVideos).catch(console.error);
  }, []);

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flexDirection: "row", margin: 10 }}
          onPress={() =>
            router.push({
              pathname: "/player",
              params: {
                id: item.id,
                title: item.title,
                channelTitle: item.channelTitle,
                thumbnail: item.thumbnail,
              },
            })
          }
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: 120, height: 80, borderRadius: 8 }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "gray" }}>{item.channelTitle}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
