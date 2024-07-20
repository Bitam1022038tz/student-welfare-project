import React, { useState } from 'react';
import './Manageusers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, role: 'Dean', fullName: 'John Doe', email: 'john.dean@example.com' },
    { id: 2, role: 'Student', fullName: 'Jane Smith', email: 'jane.student@example.com' },
    { id: 3, role: 'Counselor', fullName: 'Emily Johnson', email: 'emily.counselor@example.com' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ role: '', fullName: '', email: '' });
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
  };

  const handleSaveUpdate = () => {
    setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)));
    setSelectedUser(null);
  };

  const handleAddUser = () => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserWithId]);
    setNewUser({ role: '', fullName: '', email: '' });
    setIsAddFormOpen(false);
  };

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.role}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>
                <button className="update-button" onClick={() => handleUpdate(user)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="update-form-container">
          <h3>Update User</h3>
          <input
            type="text"
            placeholder="Role"
            value={selectedUser.role}
            onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={selectedUser.fullName}
            onChange={(e) => setSelectedUser({ ...selectedUser, fullName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={selectedUser.email}
            onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
          />
          <div className="form-buttons">
            <button className="save-button" onClick={handleSaveUpdate}>Save</button>
            <button className="cancel-button" onClick={() => setSelectedUser(null)}>Cancel</button>
          </div>
        </div>
      )}

      <button className="open-add-form-button" onClick={() => setIsAddFormOpen(true)}>Add User</button>

      {isAddFormOpen && (
        <div className="add-form-container">
          <h3>Add New User</h3>
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={newUser.fullName}
            onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <div className="form-buttons">
            <button className="add-button" onClick={handleAddUser}>Add User</button>
            <button className="cancel-button" onClick={() => setIsAddFormOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
