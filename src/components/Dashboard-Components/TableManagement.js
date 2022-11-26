import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';
import { getTableDetails, deleteTable } from '../../services/api.js'


function TableManagement() {

  const [tables, setTables] = useState([]);

  useEffect(() => {
    getAllTableDetails();
  }, []);

  const getAllTableDetails = async () => {
    let allTables = await getTableDetails();
    setTables(allTables.data);
  }

  const deleteTableDetails = async (id) => {
    if (window.confirm('Are you sure you want to Delete Table Details ?')) {
      await deleteTable(id);
      getAllTableDetails();
    } else {
      alert('Table details not deleted')
    }
  }

  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Table Management" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <Link to="/dashboard/configuretable" className="btn btn-primary">Add New Table +</Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Table No</th>
            <th scope="col">Seating Capacity</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tables.map(tables => (
              <tr key={tables._id}>
                <td>{tables._id}</td>
                <td>{tables.Table_No}</td>
                <td>{tables.Seating_Capacity}</td>
                <td>{tables.Description}</td>
                <td>
                  <Link to={`/dashboard/edittabledetails/${tables._id}`} className="btn btn-primary" style={{ marginRight: 5 }}><i class="far fa-edit"></i> Edit</Link>
                  <button type="button" className="btn btn-danger" onClick={() => deleteTableDetails(tables._id)}><i class="far fa-trash-alt"></i> Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableManagement
