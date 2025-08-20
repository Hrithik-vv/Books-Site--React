import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Registered Users</h2>
      {users.length === 0 ? (
        <p className="text-center">No users registered yet.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Active</th>
              <th>Edit</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td> 
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Active</td>
                <td><FaEdit/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Users;
