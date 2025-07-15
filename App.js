import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [billingStatus, setBillingStatus] = useState(null);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
        setUserError(null);  // Clear error if successful
      } catch (err) {
        console.error("Error fetching users:", err);
        setUserError("Could not load users.");
        setUsers([]);  // Clear users on error
      }
    };

    fetchUsers();
  }, []);

  const createSubscription = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/billing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Billing request failed");
      const data = await res.json();
      setBillingStatus(data.status);
    } catch (err) {
      console.error("Error creating subscription:", err);
      setBillingStatus("Error occurred");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>KiroGenesis Frontend</h1>

      <h2>👥 Users:</h2>
      {userError ? (
        <p style={{ color: "red" }}>{userError}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}

      <h2>🧾 Billing:</h2>
      <button onClick={createSubscription}>Create Subscription</button>
      {billingStatus && <p>Status: {billingStatus}</p>}
    </div>
  );
}

export default App;


