import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Table,
  Row,
  Col,
  Button,
  information,
} from "reactstrap";
import NavbarComp from "./NavbarComp";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CSS/Profile.css";

const API = "http://localhost:3001";
function Profile() {
 
  const [orderHistory, getOrderHistory] = useState([])
  const initInformation = {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    states: "",
    zip: "",
    email: "",
    phone: "",
    additional: "",
    response: "",
    payment: "",
    display: "none",
  };
  const [information, setInformation] = useState(initInformation);
  const [transactions, setTransaction] = useState([]);
  const id = JSON.parse(localStorage.getItem("id"));

  const getInformation = () => {
    const id = JSON.parse(localStorage.getItem("id"));
    console.log(id);
    axios.get(API + "/alamat/" + id).then((res) => {
      setInformation(res.data.values[0]);
    });
  };
  const getTransaction = () => {
    axios.get(API + "/tampilSemuaInvoice/" + id)
      .then((res) =>{
        getOrderHistory(res.data.values)
        console.log(res.data)
      } );
  };

  useEffect(() => {
    getInformation();
    getTransaction();
  }, []);

  return (
    <div className="profile">
      <Container>
        <NavbarComp />
        <Row>
          <Col xs={{ size: 12 }} className="mt-3">
            <div className="head d-flex">
              <h2>Information Details</h2>
              <div className="button">
                <Link
                  className="btn btn-success"
                  to={{
                    pathname: "/profile/edit",
                    state: {
                      firstname: information?.firstname,
                      lastname: information?.lastname,
                      address: information?.address,
                      city: information?.city,
                      states: information?.states,
                      zip: information?.zip,
                      email: information?.email,
                      phone: information?.phone,
                      additional: information?.additional,
                      response: information?.response,
                      payment: information?.payment,
                      display: information?.display,
                    },
                  }}
                >
                  Edit
                </Link>
              </div>
            </div>
            <div className="profile-information">
              <div className="information d-flex align-items-center justify-content-center">
                <div className="images" style={{ background: "white" }}>
                  <img
                    className="avatar"
                    src={process.env.PUBLIC_URL + "/assets/avatar.jpg"}
                    width="200"
                    alt=""
                  />
                  <h5 className="mt-3">
                    <center>
                      <strong>
                        {information?.firstname + " " + information?.lastname}
                      </strong>
                    </center>
                  </h5>
                  <p style={{color : '#C4C4C4'}}>
                    <center>
                      Customer
                    </center>
                  </p>
                </div>

                <div className="description" style={{ background: "white" }}>
                  <h4 style={{ color: "#C4C4C4" }}>Billing Address</h4>
                  <p>
                    <strong>
                      {information?.firstname + " " + information?.lastname}
                    </strong>
                  </p>
                  <p>Street Address : {information?.address}</p>
                  <p>{information?.email}</p>
                  <p>(+62) {information?.phone}</p>
                  <p>Additional Information :{information?.additional}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 12 }}>
            <h3>Recent Order History</h3>
            <Table>
              <thead>
                <tr>
                  <th>
                    <center>ORDER ID</center>
                  </th>
                  <th>
                    <center>DATE</center>
                  </th>
                  <th>
                    <center>TOTAL</center>
                  </th>
                  <th>
                    <center>STATUS</center>
                  </th>
                  <th>
                    <center></center>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderHistory?.map((history) => (
                  <tr key={history.id_invoice}>
                    <td className="p-4">
                      <center>
                        <Link
                        className="order-id"
                         to ={{
                           pathname: `/transaction/${history.id_transaksi}`,
                           state:{
                             id : history.id_transaksi
                           }
                        }}
                        >
                          {history.id_transaksi}
                        </Link>
                      </center>
                    </td>
                    <td className="p-4">
                      <center>
                        {history.transaksi_date.slice(0,10)}
                      </center>
                    </td>
                    <td className="p-4">
                      <center>
                        {history.total}
                      </center>
                    </td>
                    <td className="p-4">
                      <center>
                       {history.status===1 ? 'On Delivery' : 'On Preparation' }
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
