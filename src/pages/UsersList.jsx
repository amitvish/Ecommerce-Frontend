import { useUsers } from "../hooks/useUsers";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const { data: users, isLoading, error } = useUsers();

  console.log("Users Data:", users); // ✅ Log data for debugging

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users List</h1>

      {users && users.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UsersList;
