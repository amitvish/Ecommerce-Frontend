import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUser = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:8081/api/users/${id}`);
      return response.data;
    },
  });
};
