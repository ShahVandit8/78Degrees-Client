import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addtable } from '../../services/api.js'
import PageHeading from '../../components/PageHeading';
import axios from 'axios';
import { saveAs } from 'file-saver'


function ConfigureTable() {

  const defaultValue1 = {
    Table_No: 0,
    Seating_Capacity: 0,
    Description: "",
    QR_Url: '',

  }

  const [table, setTable] = useState(defaultValue1);
  const [response, setResponse] = useState('')

  const [url, setUrl] = useState(`${window.location.origin}/menu/table/500`)
  const navigate = useNavigate();

  const config = {
    headers: { Authorization: 'Bearer 65677130-4558-11ed-978c-5bb317835170' }
  }

  const bodyparameters =
  {
    "colorDark": "rgb(5,64,128)",
    "qrCategory": "url",
    "text": url,
  }

  const getQrCode = async () => {
    if (table.Table_No > 0) {
      setUrl(`${window.location.origin}/menu/table/${table.Table_No}`)
      try {
        const res = await axios.post(
          'https://qrtiger.com/api/qr/static',
          bodyparameters,
          config
        );
        setResponse(res.data.url);
        setTable({ ...table, QR_Url: res.data.url.toString() });

      } catch (err) {

      } finally {

      }
    }
    else {
      alert('Enter Table-No First')
    }

  }

  const downloadQRCode = () => {
    console.log(table)
    saveAs(response, `QR-Table No.png`)
  }

  const configureTable = async (e) => {
    e.preventDefault();

    if (response) {
      const tableconfigured = await addtable(table);

      if (tableconfigured) {
        alert('Table Configured Successfully')
        downloadQRCode()
        navigate(-1)
      }
      else (
        alert('This Table Number is already added, use different table number')
      )
    }
    else {
      alert('Please Generate the QR code for the new table')
    }



  }

  const onValueChange = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value })
    setUrl(`${window.location.origin}/menu/table/${table.Table_No}`)
    console.log(url)
    console.log(table)
  }

  // 65677130-4558-11ed-978c-5bb317835170

  return (
    <div>
      <div style={{ paddingLeft: 13 }}>
        <PageHeading title="Configure Table" />
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
                  <form id="contact-form" role="form" onSubmit={configureTable} >
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Table Number</label>
                            <input id="form_name" type="number" name="Table_No" className="form-control" placeholder="Enter only Number" required data-error="Table Name is required." onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Table Seating Capacity</label>
                            <input id="form_name" type="number" name="Seating_Capacity" placeholder="Enter only Number" className="form-control" required data-error="Seating Capacity is required." onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Description</label>
                            <textarea id="form_message" name="Description" className="form-control" rows={4} required data-error="Please, leave us a message." defaultValue={""} onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div className="row my-2" style={{ height: 450, backgroundColor: '#eee' }}>
                        <div className="col-md-12">
                          <button type="button" className="btn btn-success mt-3 btn-block" style={{ color: 'white' }} onClick={() => getQrCode()}>Generate QR Code</button>

                          {response ? (
                            <div>
                              <img className="mx-auto mt-5 d-block" style={{ width: 250, height: 250 }} src={response} alt="Qr Code" name="QR_Url" />
                              {/* <button type="submit" className="btn btn-primary mt-4 btn-block" style={{color: 'white'}} onClick={() => downloadQRCode()}>Download QR Code</button> */}
                            </div>
                          ) : (
                            <div className="my-auto d-block">Your QrCode will be showing here...</div>
                          )}

                        </div>
                      </div>
                      <div className="col-md-12 mt-5">
                        <button type="submit" className="btn btn-primary pt-2 btn-block" style={{ color: 'white' }} >Configure Table</button>
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

export default ConfigureTable
