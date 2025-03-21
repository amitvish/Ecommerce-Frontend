import { useNavigate } from "react-router-dom";

const UsersList = ({ users }) => {
  const navigate = useNavigate();

  if (!users || users.length === 0) {
    return <p>⚠️ No users found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>User List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <h3>{user.firstName} {user.lastName}</h3>
            {/* <p>{user.email}</p> */}
            <button
              onClick={() => navigate(`/users/${user.id}`)}
              style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
