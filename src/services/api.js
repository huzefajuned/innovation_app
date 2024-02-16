import axios from "axios";
export const BASE_URL = "https://dummyjson.com/auth/";
export const PATH = {
  LOGIN: "login",
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error; // You might want to handle this error in your application
  }
};
