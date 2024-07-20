import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'http://127.0.0.1:8080/api'

const AdminPanel = () => {
  const [roles, setRoles] = useState([])

  useEffect(() => {
    axios
      .get(`${apiUrl}/roles`)
      .then((response) => {
        setRoles(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="admin-panel">
      <h2>Roles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminPanel
