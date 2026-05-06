import { useEffect, useState } from "react";

function FetchWebsite() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1> USER Details </h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>User_Name: {user.name}</h3>
          <p>User_Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchWebsite;
