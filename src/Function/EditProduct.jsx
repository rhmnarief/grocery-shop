import React, { Component } from 'react'
import axios from 'axios';
import qs from 'querystring';
import { Container, Col, Form, Row, FormGroup, Alert, Label, Input, Button } from 'reactstrap';


const api = "http://localhost:3001"

class EditProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.location.state.id,
            nama_produk: this.props.location.state.nama_produk,
            harga: this.props.location.state.harga,
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
    // ubahMahasiswa = (id_mahasiswa) => {
    //     const data = qs.stringify({
    //         id_mahasiswa: id_mahasiswa,
    //         nim: this.state.nim,
    //         nama: this.state.nama,
    //         jurusan: this.state.jurusan

    //     })
    //     axios.put(api + '/ubah', data)
    //         .then(json => {
    //             console.log("ubah data ke json")
    //             if (json === 200) {
    //                 this.setState({
    //                     response: json.data.values,
    //                     display: 'block'
    //                 })
    //             } else {
    //                 this.setState({
    //                     response: json.data.values,
    //                     display: 'block'
    //                 })
    //             }
    //         })

    // }
    render() {
        return (
            <Container>
                <h1>Ini adalah Edit </h1>
                <h4>Form Tambah Data</h4>
                {/* <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
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
                                        <option key={produk.kategori} name="kategori">{produk.kategori}</option>
                                    )
                                }
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="">Foto Produk</Label>
                            <Input type="text" onChange={this.handleChange} name="foto" id="foto" value={this.state.foto} placeholder="input nama file foto produk" />
                        </FormGroup>
                    </Col>
                </Form> */}
            </Container>
        )
    }
}


export default EditProduct