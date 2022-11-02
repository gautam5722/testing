import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import StudentListTabel from "./StudentListTabel";


export default function CustomFilter() {
  const [count, setCount] = useState(false);
  return (
    <div>    <div className="container bg-dark text-white mt-4 p-3">
      <h1 className="h1">Filter</h1>
      <div className="row">
        <div className="col-sm-3">
          <label className="form-label">Session</label>

          <Form.Select aria-label="Session">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="col-sm-3">
          <label className="form-label">Branch</label>

          <Form.Select aria-label="Branch">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="col-sm-3">
          <label className="form-label">Stream</label>

          <Form.Select aria-label="Stream">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="col-sm-3">
          <label className="form-label">Semester</label>
          <Form.Select aria-label="Semester">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>


      </div>
      <div className="row mt-2">
      <div className="col">
        <button className="btn btn-primary " onClick={setCount(!count)}>Search</button>
        </div>
      </div>
    </div>
    {count ? <StudentListTabel  />: <span></span>}
    
    
    </div>

  );
}
