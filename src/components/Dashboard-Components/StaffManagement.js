import React from 'react'
import { useEffect, useState } from 'react'
import moment from 'moment';
import { getUser, deleteUser } from '../../services/api'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';



function StaffManagement() {

  const [emp, setEmp] = useState([]);

  useEffect(() => {
    getAllEmp();
  }, []);

  const getAllEmp = async () => {
    let allEmp = await getUser();
    setEmp(allEmp.data);
  }

  const deleteUserDetails = async (id) => {
    if (window.confirm('Are you sure you want to Delete Employee Details ?')) {
      await deleteUser(id);
      getAllEmp();
    } else {
      alert('Employee details not deleted')
    }
  }

  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Staff Management" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <Link to="/dashboard/addemployee" className="btn btn-primary">Add New Staff +</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Employee Type</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of Join</th>
            <th scope="col">Address</th>


            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            emp.map(emp => (
              <tr key={emp._id}>
                <td>{emp._id}</td>
                <td>{emp.first_name} {emp.last_name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.empType}</td>
                <td>{emp.gender}</td>
                <td>{moment(emp.doj).format('DD/MM/yyyy')}</td>
                <td>{emp.address}</td>
                <td>
                  <Link to={`/dashboard/editemployee/${emp._id}`} className="btn btn-primary" style={{ marginRight: 5 }}><i class="far fa-edit"></i> Edit</Link>
                  <button type="button" className="btn btn-danger" onClick={() => deleteUserDetails(emp._id)}><i class="far fa-trash-alt"></i> Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default StaffManagement
