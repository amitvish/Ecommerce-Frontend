import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:8081/api/users/"); // ✅ Your backend API
  console.log("API Response:", data); // ✅ Debug the API response

  return Array.isArray(data) ? data : data.users || []; // ✅ Ensure we return an array
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
