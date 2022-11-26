import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';
import { editTable, getEditTable } from '../../services/api.js'
import { saveAs } from 'file-saver'


function EditTable() {

  const defaultValue1 = {
    Table_No: 0,
    Seating_Capacity: 0,
    Description: "",
    QR_Url: '',

  }

  const [table, setTable] = useState(defaultValue1);
  const [urlres, setUrlRes] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadTableDetail();
  }, [])

  const loadTableDetail = async () => {
    const response = await getEditTable(id);
    setTable(response.data);
    setUrlRes(response.data.QR_Url)
  }

  const onValueChange = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value })
    console.log(table)
  }

  const editTableDetail = async (e) => {
    e.preventDefault();

    const tableEdited = await editTable(table, id);

    if (tableEdited) {
      alert('Table Details Updated Successfully')
      navigate(-1)
    }
    else (
      alert("Table Details Update Failure")
    )
  }

  const downloadQRCode = () => {
    saveAs(table.QR_Url)
  }



  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Edit Table Configuration" />
      </div>
      <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={editTableDetail}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Table Number</label>
                            <label style={{ fontSize: 10 }}>(Table Number cannot change)</label>
                            <input id="form_name" type="text" name="Table_No" className="form-control" placeholder="Table Number cannot change" required data-error="Table Name is required." onChange={(e) => onValueChange(e)} value={table.Table_No} readOnly={true} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Table Seating Capacity</label>
                            <input id="form_name" type="text" name="Seating_Capacity" placeholder="Enter only Number" className="form-control" required data-error="Seating Capacity is required." onChange={(e) => onValueChange(e)} value={table.Seating_Capacity} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Description</label>
                            <textarea id="form_message" name="Description" className="form-control" rows={4} required data-error="Please, leave us a message." onChange={(e) => onValueChange(e)} value={table.Description} />
                          </div>
                        </div>
                      </div>
                      <div className="row my-2" style={{ height: 450, backgroundColor: '#eee' }}>
                        <div className="col-md-12">

                          <div>
                            <img className="mx-auto mt-5 d-block" style={{ width: 250, height: 250 }} src={urlres} alt="Qr Code" name="QR_Url" />
                            <button type="submit" className="btn btn-success mt-5 btn-block" style={{ color: 'white' }} onClick={() => downloadQRCode()}>Download QR Code</button>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-12 mt-5">
                        <button type="submit" className="btn btn-primary pt-2 btn-block" style={{ color: 'white' }} >Edit Table</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.8 */}
          </div>
          {/* /.row*/}
        </div>
      </div>
    </div>
  )
}

export default EditTable
