import { useEffect, useState } from "react";
import { getUsers, blockUser, unblockUser } from "../../services/user.service";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [blockState, setBlockState] = useState({}); // { [userId]: true/false }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState({}); // { [userId]: boolean }
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getUsers();
      const usersArray = Array.isArray(data) ? data : [];
      setUsers(usersArray);
      // Sync block state from backend (assuming user.is_blocked or user.blocked)
      const blockMap = {};
      usersArray.forEach(user => {
        if (user.role === "USER") {
          // Try both possible property names
          blockMap[user.id] = !user.is_active;
        }
      });
      setBlockState(blockMap);
    } catch (err) {
      setError("Failed to fetch users.");
    }
    setLoading(false);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-header">Users List</h2>
      <div className="user-list-section">
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="addSeller-error">{error}</p>
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="seller-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.filter(user => user.role === "USER").map((user, idx) => {
                const isBlocked = blockState[user.id] ?? false;
                const handleBlockToggle = async () => {
                  setActionLoading(prev => ({ ...prev, [user.id]: true }));
                  try {
                    if (isBlocked) {
                      await unblockUser(user.id);
                      setToast(`${user.name} unblocked successfully!`);
                    } else {
                      await blockUser(user.id);
                      setToast(`${user.name} blocked successfully!`);
                    }
                    setBlockState(prev => ({ ...prev, [user.id]: !isBlocked }));
                  } catch (err) {
                    setToast("Failed to update user block status.");
                  }
                  setTimeout(() => setToast(""), 2000);
                  setActionLoading(prev => ({ ...prev, [user.id]: false }));
                };
                return (
                  <tr key={user.id || idx}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        color: isBlocked ? "#e53935" : "#43a047",
                        fontWeight: 600,
                        marginRight: 8
                      }}>
                        {isBlocked ? "Blocked" : "Active"}
                      </span>
                      <button
                        className={isBlocked ? "block-btn" : "unblock-btn"}
                        onClick={handleBlockToggle}
                        disabled={!!actionLoading[user.id]}
                      >
                        {actionLoading[user.id]
                          ? (isBlocked ? "Unblocking..." : "Blocking...")
                          : (isBlocked ? "Unblock" : "Block")}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {toast && (
        <div style={{
          position: "fixed",
          top: 24,
          right: 24,
          background: "#333",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 8,
          zIndex: 9999,
          fontWeight: 500
        }}>{toast}</div>
      )}
    </div>
  );
};

export default ViewUser;
