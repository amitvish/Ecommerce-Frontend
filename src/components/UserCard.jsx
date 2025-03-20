import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="border p-4 rounded-lg shadow-md hover:bg-gray-100">
      <img src={user.image} alt={user.firstName} className="w-20 h-20 rounded-full mb-2" />
      <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </Link>
  );
};

export default UserCard;
