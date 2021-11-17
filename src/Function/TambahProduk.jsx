import React, { useState, useEffect, Component } from 'react'
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
    // DropdownMenu,
    // DropdownItem,
    // Dropdown
}
    from 'reactstrap'
import './CSS/InputForm.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductPage from './ProductPage'

const api = 'http://localhost:3001'

class TambahProduk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produk: [],
            nama_produk: '',
            deskripsi: '',
            harga: '',
            kategori: '',
            kuantitas: '',
            foto: '',
            display: 'none',
            response: '',
        }
    }
    componentDidMount() {
        axios.get(api + '/tampilProduk').then(res => {
            console.log(res.data.values)
            this.setState({
                produk: res.data.values
            })
        })
    }
    handleChange = (e) => {
        console.log("Melaakukan Handle Change " + e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // error input tugas
    tambahProduk = () => {
        console.log('memanggil tambah produk')
        axios.put(api + '/tambahProduk', {
            nama_produk: this.state.nama_produk,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
            kuantitas: this.state.kuantitas,
            kategori: this.state.kategori,
            foto: this.state.foto
        }).then(json => {
            if (json.data.status === 200) {
                console.log("Data berhasil dikirim")
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            } else {
                console.log("Data gagal dikirim")
                this.setState({
                    response: json.data.values,
                    display: 'block',
                })
            }
        })

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className="input-table" xs={{ size: 8, offset: 2 }} >
                        <Alert color="success" style={{ display: this.state.display }}>
                            {this.state.response}
                            <Link to='/admin' >
                                <Button className="btn btn-danger">Kembali</Button>
                            </Link>
                        </Alert>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Nama Produk</Label>
                                <Input type="text" onChange={this.handleChange} name="nama_produk" id="nama_produk" value={this.state.nama_produk} placeholder="input nama produk" />
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
                                <select className="dropdown" onChange={this.handleChange} name="kategori">
                                    {
                                        this.state.produk.map((produk) =>
                                            <option key={[... new Set(produk.kategori)]} name="kategori">
                                                {produk.kategori}
                                            </option>
                                        )
                                    }
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="">Foto Produk</Label>
                                <Input type="text" onChange={this.handleChange} name="foto" id="foto" value={this.state.foto} placeholder="input nama file foto produk" />
                            </FormGroup>
                            <Button className="btn btn-success mt-4" onClick={this.tambahProduk}>Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default TambahProduk
