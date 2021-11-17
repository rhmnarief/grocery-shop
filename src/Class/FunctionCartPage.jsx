import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Table, Navbar } from "reactstrap";
import NavbarComp from "../Function/NavbarComp";
import { Link } from "react-router-dom";
import axios from 'axios'
import "../Function/CSS/CartPage.css";

const api = "http://localhost:3001";

function FunctionCartPage() {
  const localData = localStorage.getItem("keranjang");
  const data = JSON.parse(localData);
  const [keranjang, setKeranjang] = useState(data);

  const [cart, setCart] = useState(0);
  const getTotal = () => {
    const totalKalkulasi = []
    data?.forEach((element) => {
      const kalkulasi = element.jumlah * element.harga
      totalKalkulasi.push(kalkulasi)
    });
    var tmp = 0
    for(let i=0; i < totalKalkulasi.length; i++){
       tmp = totalKalkulasi[i] + tmp
    }
    setCart(tmp)
  };

  function removeItem(id_produk) {
    const newKeranjang = data.filter((item) => item.id_produk !== id_produk);
    console.log("isi new keranjang", newKeranjang);
    setKeranjang(newKeranjang);
    localStorage.setItem('keranjang', JSON.stringify(newKeranjang))
    getTotal();
    console.log("menghapus keranjang di item dengan id: ", id_produk);
  }

  function plusJumlah(id_produk) {
    data.forEach(element => {
      if(element.id_produk === id_produk){
        const tmpJumlah = element.jumlah
        element.jumlah = tmpJumlah + 1
      }
      localStorage.setItem("keranjang", JSON.stringify(data))
    });
    setKeranjang(data);
    getTotal()
  }

  function minusJumlah(id_produk,jumlah) {
    if (jumlah > 1){
      data.forEach(element => {
        if(element.id_produk === id_produk){
          const tmpJumlah = element.jumlah
          element.jumlah = tmpJumlah - 1
        }
        localStorage.setItem("keranjang", JSON.stringify(data))
      });
      setKeranjang(data);
      getTotal()
    }else{
      removeItem(id_produk)
    }
  }

  // set data for information personal
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
  const getInformation = () => {
    const id = JSON.parse(localStorage.getItem("id"));
    axios.get(api + "/alamat/" + id).then((res) => {
      setInformation(res.data.values[0]);
    });
  };



  useEffect(() => {
    getTotal();
    getInformation()
  }, []);

  return (
    <div className="cart-page">
      <Container>
        <NavbarComp />
        <Row className="d-flex align-items-center">
          <h2 className="head">
            {" "}
            <center>My Shopping Cart</center>{" "}
          </h2>
          <Col xs="8">
            <Table className="m-0">
              <tr>
                <th>
                  {" "}
                  <center>PRODUCT</center>{" "}
                </th>
                <th>
                  {" "}
                  <center>PRICE</center>{" "}
                </th>
                <th>
                  {" "}
                  <center>QUANTITY</center>{" "}
                </th>
                <th>SUBTOTAL</th>
                <th>Remove</th>
              </tr>
              {keranjang?.map((item) => {
                return (
                  <tr key={item.id_produk}>
                    <td className="d-flex align-items-center justify-content-center ">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/" + item.foto}
                        alt=""
                        width="100px"
                      />
                      {item.nama_produk}
                    </td>
                    <td>
                      <center>Rp. {item.harga}</center>
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          className="min"
                          onClick={() => minusJumlah(item.id_produk, item.jumlah)}
                        >
                          -
                        </Button>
                        <div className="m-2"></div>

                        <p className="total mb-0">{item.jumlah}</p>
                        <div className="m-2"></div>
                        <Button
                          className="plus"
                          onClick={() => plusJumlah(item.id_produk ,item.jumlah)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>Rp. {item.jumlah * item.harga}</td>
                    <td>
                      <Button
                        className="btn-delete btn-danger"
                        style={{ "background-color": "red" }}
                        onClick={() => removeItem(item.id_produk)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </Col>
          <Col className="total-payment" xs="4">
            <div className="row d-flex">
              <h3 className="head">Cart Total</h3>
              <div className="sub-total">
                <p className="mb-0">Subtotal</p>
                <p className="text mb-0">
                  {" "}
                  <strong>Rp. {cart.toString().split()}</strong>
                </p>
              </div>
              <hr />
              <div className="sub-total">
                <p className="mb-0">Shipping: </p>
                <p className="text mb-0">Free</p>
              </div>
              <hr />
              <div className="sub-total mb-4">
                <p className="mb-0">Total:</p>
                <p className="text mb-0">Rp.{cart}</p>
              </div>
              <Link
                  className="btn btn-success"
                  to={{
                    pathname: "/checkout",
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
                    },
                  }}
                >
                 Proeed to Checkout
                </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FunctionCartPage;
