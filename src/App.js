import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users)) // Notice the change here
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Domain</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
