import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "reactstrap";
import { FormGroup, Label, Input, Button } from "reactstrap";
import '../Class/Style/FormShipment.css'


import NavbarComp from "./NavbarComp";
import Order from "./Order";
import axios from "axios";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const API = "http://localhost:3001";

function Checkout(props) {
  const id = JSON.parse(localStorage.getItem("id"));
  const getData = localStorage.getItem("keranjang");
  const getLocalData = JSON.parse(getData);
  const [keranjang, setKeranjang] = useState(getLocalData);

  const initForm = {
    firstname: props.location.state.firstname,
    lastname: props.location.state.lastname,
    address: props.location.state.address,
    city: props.location.state.city,
    states: props.location.state.states,
    zip: props.location.state.zip,
    email: props.location.state.email,
    phone: props.location.state.phone,
    additional: props.location.state.additional,
    response: "",
    payment: "",
    id_user: id,
    display: "none",
  };

  const [Form, setForm] = useState(initForm);

  const [cart, setCart] = useState(0);
  const getTotal = () => {
    const totalKalkulasi = [];
    getLocalData?.forEach((element) => {
      const kalkulasi = element.jumlah * element.harga;
      totalKalkulasi.push(kalkulasi);
    });
    var tmp = 0;
    for (let i = 0; i < totalKalkulasi.length; i++) {
      tmp = totalKalkulasi[i] + tmp;
    }
    setCart(tmp);
  };

  const postInformation = () => {
    console.log("test postInformation");
    axios.put(API + "/tambahAlamat", Form).then((json) => {
      if (json === 200) {
        setForm({
          response: json.data.values,
          display: "block",
        });
      } else {
        setForm({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };

  const putTransaction = () => {
    const getKeranjang = JSON.parse(localStorage.getItem("keranjang"));

    const toBeSend = {
      id,
      totalProduct: getKeranjang,
    };
    console.log(toBeSend);

    axios.put(API + "/transaksi", toBeSend).then((json) => {
      setForm({
        response: json.data?.values || "Gagal memuat peberitahuan!",
        display: "block",
      });
    });
  };

  const putInvoice = () => {
    const toBeSend = {
      cart,
      id,
    };
    console.log(toBeSend);
    axios.put(API + "/sendInvoice", toBeSend).then((json) => {
      console.log(json);
    });
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  function executeInput() {
    putTransaction();
    postInformation();
    putInvoice();
   
  }

  // const backHome = () => {
  //   window.localStorage.clear("keranjang");
  //   window.location = "http://localhost:3000/home";
  // };

  useEffect(() => {
    getTotal();
    // console.log(id)
  }, []);

  return (
    <div>
      <Container>
        <NavbarComp />
        <Row>
          <Col xs="8">
            <div className="form">
              <h2>Billing Information</h2>
              <div className="identity d-flex align-items-center mb-2">
                <div className="input">
                  <Label for="firstname">Firstname</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="Your first name"
                    type="text"
                    value={Form.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <Label for="lastname">Lastname</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Your last name"
                    type="text"
                    value={Form.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input mb-2">
                <Label>Street Address</Label>
                <Input
                  type="textarea"
                  placeholder="Street Adress"
                  name="address"
                  value={Form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="address d-flex align-items-center mb-2">
                <div className="input">
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input
                      id="exampleCity"
                      name="city"
                      value={Form.city}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="input">
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input
                      id="exampleState"
                      name="states"
                      value={Form.states}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="input">
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input
                      id="exampleZip"
                      name="zip"
                      type="number"
                      value={Form.zip}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="contact d-flex align-items-center">
                <div className="input d-flex">
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="text"
                      id="exampleEmail"
                      placeholder="Email Address"
                      name="email"
                      value={Form.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
                <div className="input d-flex">
                  <FormGroup>
                    <Label for="exampleEmail">Phone</Label>
                    <Input
                      type="number"
                      id="exampleEmail"
                      placeholder="Phone Number"
                      name="phone"
                      value={Form.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>
              </div>
              <hr />
              <div className="additional">
                <h2>Additional Info</h2>
                <Label>Order Notes (Optional)</Label>
                <Input
                  type="textarea"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  name="additional"
                  value={Form.additional}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Col>
          <Col xs="4">
            <div className="order">
              <h2>Order Summary</h2>
              {keranjang?.map((keranjangs) => (
                <Order
                  key={keranjangs.id_produk}
                  nama_produk={keranjangs.nama_produk}
                  harga={keranjangs.harga}
                  jumlah={keranjangs.jumlah}
                  foto={keranjangs.foto}
                />
              ))}
              <hr />
              <div className="aligntext d-flex align-items-center">
                <p className="mb-0">Shipping:</p>
                <p className="total mb-0">Free</p>
              </div>
              <hr />
              <div className="aligntext d-flex align-items-center">
                <p className="mb-0">Total:</p>
                <p className="total mb-0">
                  {" "}
                  <strong>Rp. {cart}</strong>
                </p>
              </div>
              <div className="payment mt-4">
                <h4>Payment Method</h4>
                <FormGroup check>
                  <Input
                    name="payment"
                    value="Cash On Delivery"
                    type="radio"
                    onChange={handleChange}
                  />{" "}
                  <Label check>Cash On Delivery</Label>
                </FormGroup>
                <center>
                  <Link to="/success">
                  <Button
                    className="btn btn-success d-flex"
                    onClick={executeInput}
                  >
                    Place Order
                  </Button>
                  </Link>

                </center>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
