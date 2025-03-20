const RoleFilter = ({ role, setRole }) => {
    return (
      <div className="mb-4">
        <label className="mr-2">Filter by Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2">
          <option value="">All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
        </select>
      </div>
    );
  };
  
  export default RoleFilter;
  