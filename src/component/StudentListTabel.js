import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function StudentListTabel() {
  return (
    <div className="container mt-4">
      <div className="card border border-dark">
        <div className="card-body">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Student </th>
                <th>Registraion no</th>
                <th>Assign Mentor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ashish</td>
                <td>180101120056</td>
                <td>
                  <Form.Select aria-label="mentorlist">
                    <option value="1">Saschi bhusan maharna</option>
                    <option value="2">debenedra</option>
                    <option value="3">dhwalu</option>
                  </Form.Select>
                </td>
                <td>
                  <button className="btn btn-outline-primary">Assign ✅</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ashish</td>
                <td>180101120056</td>
                <td>
                  <Form.Select aria-label="mentorlist">
                    <option value="1">Saschi bhusan maharna</option>
                    <option value="2">debenedra</option>
                    <option value="3">dhwalu</option>
                  </Form.Select>
                </td>
                <td>
                  <button className="btn btn-outline-primary">Assign ✅</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ashish</td>
                <td>180101120056</td>
                <td>
                  <Form.Select aria-label="mentorlist">
                    <option value="1">Saschi bhusan maharna</option>
                    <option value="2">debenedra</option>
                    <option value="3">dhwalu</option>
                  </Form.Select>
                </td>
                <td>
                  <button className="btn btn-outline-primary">Assign ✅</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ashish</td>
                <td>180101120056</td>
                <td>
                  <Form.Select aria-label="mentorlist">
                    <option value="1">Saschi bhusan maharna</option>
                    <option value="2">debenedra</option>
                    <option value="3">dhwalu</option>
                  </Form.Select>
                </td>
                <td>
                  <button className="btn btn-outline-primary">Assign ✅</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
