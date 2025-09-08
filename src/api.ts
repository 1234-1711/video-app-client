import axios from "axios";
import { Video } from "./types";

// ⚠️ Replace with your machine's IP (not localhost when testing on Expo Go)
const API_URL = "http://10.227.119.146:4000/videos";



export async function fetchVideos(): Promise<Video[]> {
  const res = await axios.get(API_URL);
  return res.data;
}
