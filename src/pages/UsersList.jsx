import { useNavigate } from "react-router-dom";

const UsersList = ({ users = [] }) => {  // ✅ Ensure users has a default empty array
  const navigate = useNavigate();

  if (!users || users.length === 0) {
    return <p>Loading users...</p>;  // ✅ Handle case when no users are available
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.firstName} {user.lastName}</p>
          <button
            onClick={() => {
              console.log(`🔗 Navigating to: /users/${user.id}`);
              navigate(`/users/${user.id}`);
            }}
          >
            Go to Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
