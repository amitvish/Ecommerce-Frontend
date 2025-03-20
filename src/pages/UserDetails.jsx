import { useParams, Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUser(id);

  if (isLoading) return <p>Loading user details...</p>;
  if (error) return <p>Error fetching user details!</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500">&larr; Back to Users List</Link>
      <div className="flex items-center gap-6 mt-4">
        <img src={user.image} alt={user.firstName} className="w-32 h-32 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Company: {user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
