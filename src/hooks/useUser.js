import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../services/userService";

export const useUser = (id) => {  // ✅ Ensure correct export name
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, // Only fetch when ID is available
  });
};
