import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API_URL} from '@env'

const ApiManager = axios.create({
  baseURL: `${API_URL}`,
});

ApiManager.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { ApiManager };