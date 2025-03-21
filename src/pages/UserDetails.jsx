import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); // Get user ID from the URL
  console.log("🚀 UserDetails Loaded with ID:", id); // Debugging log
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h2>{user.firstName} {user.lastName}</h2>
      <img src={user.image} alt={`${user.firstName}`} style={styles.image} />
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Birth Date:</strong> {user.birthDate}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  image: { width: "150px", borderRadius: "50%", margin: "10px 0" }
};

export default UserDetails;
