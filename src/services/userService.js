import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch all users with optional role filtering
 */
export const fetchUsers = async (role) => {
  try {
    const url = role ? `${API_BASE_URL}/users?role=${role}` : `${API_BASE_URL}/users`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetch a single user by ID
 */
export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
