import React, { Component } from 'react'
import axios from 'axios';
import qs from 'querystring';
import { Container, Col, Form, Row, FormGroup, Alert, Label, Input, Button, Navbar } from 'reactstrap';
import NavbarComp from './NavbarComp';
import './CSS/EditProduct.css'

const api = "http://localhost:3001"

class EditProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_produk: this.props.location.state.id,
            nama_produk: this.props.location.state.nama_produk,
            harga: this.props.location.state.harga,
            kategori: this.props.location.state.kategori,
            kuantitas: this.props.location.state.kuantitas,
            deskripsi: this.props.location.state.deskripsi,
            foto: this.props.location.state.foto,
            response: '',
            display: 'none'

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    ubahProduk = (id) => {
        const data = qs.stringify({
            id_produk: id,
            nama_produk: this.state.nama_produk,
            harga: this.state.harga,
            kuantitas: this.state.kuantitas,
            deskripsi: this.state.deskripsi,
            foto: this.state.foto,

        })
        axios.post(api + '/ubahProduk', data)
            .then(json => {
                console.log("ubah data ke json")
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })

    }
    render() {
        return (
            <div>
                <Container>
                    <NavbarComp />
                    <h4>  <center>Form Tambah Data</center> </h4>
                    <Alert color="success" style={{ display: this.state.display }}>
                        {this.state.response}
                    </Alert>
                    <Form className="form">
                        <Col xs={{ offset:2, size: 8}}>
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
                            <FormGroup>
                                <Label for="exampleEmail">Nama Produk</Label>
                                <Input type="text" onChange={this.handleChange} className="nama_produk" name="nama_produk" id="nama_produk" value={this.state.nama_produk} placeholder="input nama produk" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Deskripsi</Label>
                                <Input type="textarea" onChange={this.handleChange} className="deskripsi" name="deskripsi" id="deskripsi" value={this.state.deskripsi} placeholder="input deksripsi produk" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="text">Harga</Label>
                                <Input type="number" onChange={this.handleChange} name="harga" id="harga" value={this.state.harga} placeholder="input harga" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="">Kuantitas</Label>
                                <Input type="number" onChange={this.handleChange} name="kuantitas" id="kuantitas" value={this.state.kuantitas} placeholder="input kuantitas produk" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Kategori Produk</Label>
                                <br />
                                <div className="dropdown">
                                <select onChange={this.handleChange} name="kategori">
                                    <option value="Produk Cepat Saji" >Produk Cepat Saji</option>
                                    <option value="Daging dan Seafood">Daging dan Seafood</option>
                                    <option value="Buah dan Sayur">Buah dan Sayur</option>
                                </select>

                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="">Foto Produk</Label>
                                <Input type="text" onChange={this.handleChange} name="foto" id="foto" value={this.state.foto} placeholder="input nama file foto produk" />
                            </FormGroup>
                            <Button className="btn mt-4 btn-success" onClick={() => this.ubahProduk(this.state.id_produk)}>Submit</Button>
                        </Col>
                    </Form>
                </Container>
            </div>

        )
    }
}


export default EditProduct;