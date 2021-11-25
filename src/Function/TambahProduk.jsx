import React, { useState, useEffect, Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import "./CSS/InputForm.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarComp from "./NavbarComp";
import ProductPage from "./ProductPage";

const api = "http://localhost:3001";

class TambahProduk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produk: [],
      nama_produk: "",
      deskripsi: "",
      harga: "",
      kategori: "",
      kuantitas: "",
      foto: "",
      display: "none",
      response: "",
    };
  }
  componentDidMount() {
    axios.get(api + "/tampilProduk").then((res) => {
      console.log(res.data.values);
      this.setState({
        produk: res.data.values,
      });
    });
  }
  handleChange = (e) => {
    console.log(e.target.name, " ", e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // error input tugas
  tambahProduk = () => {
    console.log("memanggil tambah produk");
    axios
      .put(api + "/tambahProduk", {
        nama_produk: this.state.nama_produk,
        deskripsi: this.state.deskripsi,
        harga: this.state.harga,
        kuantitas: this.state.kuantitas,
        kategori: this.state.kategori,
        foto: this.state.foto,
      })
      .then((json) => {
        if (json.data.status === 200) {
          console.log("Data berhasil dikirim");
          this.setState({
            response: json.data.values,
            display: "block",
          });
        } else {
          console.log("Data gagal dikirim");
          this.setState({
            response: json.data.values,
            display: "block",
          });
        }
      });
  };
  render() {
    return (
      <Container>
        <NavbarComp />
        <center>
            <h2>Form Tambah Produk</h2>
        </center>
        <Row>
          <Col className="input-table" xs={{ size: 8, offset: 2 }}>
            <a href="/admin">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                Kembali ke dashboard
              </p>
            </a>
            <Alert color="success" style={{ display: this.state.display }}>
              {this.state.response}
            </Alert>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Nama Produk</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="nama_produk"
                  id="nama_produk"
                  value={this.state.nama_produk}
                  placeholder="input nama produk"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Deskripsi</Label>
                <Input
                  type="textarea"
                  onChange={this.handleChange}
                  className="deskripsi"
                  name="deskripsi"
                  id="deskripsi"
                  value={this.state.deskripsi}
                  placeholder="input deksripsi produk"
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Harga</Label>
                <Input
                  type="number"
                  onChange={this.handleChange}
                  name="harga"
                  id="harga"
                  value={this.state.harga}
                  placeholder="input harga"
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Kuantitas</Label>
                <Input
                  type="number"
                  onChange={this.handleChange}
                  name="kuantitas"
                  id="kuantitas"
                  value={this.state.kuantitas}
                  placeholder="input kuantitas produk"
                />
              </FormGroup>
              <FormGroup>
                <Label>Kategori Produk</Label>
                <br />
                <select
                  className="dropdown"
                  onChange={this.handleChange}
                  name="kategori"
                >
                  <option value="Produk Cepat Saji">Produk Cepat Saji</option>
                  <option value="Daging dan Seafood">Daging dan Seafood</option>
                  <option value="Buah dan Sayur">Buah dan Sayur</option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="">Foto Produk</Label>
                <Input
                  type="text"
                  onChange={this.handleChange}
                  name="foto"
                  id="foto"
                  value={this.state.foto}
                  placeholder="input nama file foto produk"
                />
              </FormGroup>
              <Button
                className="btn btn-success mt-4"
                onClick={this.tambahProduk}
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TambahProduk;
