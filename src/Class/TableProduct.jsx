import React, { Component } from 'react'
import {
    Table,
    Container,
    Row,
    Col,
    Button,
    Alert
} from 'reactstrap'
import qs from 'querystring';
import { Link, withRouter } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios'
import './Style/TableProduct.css'

const api = 'http://localhost:3001'

export default class TableProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            produk: [],
            response: '',
            display: 'none'
        }
    }
    componentDidMount() {
        axios.get(api + '/tampilProduk')
            .then(res => {
                this.setState({
                    produk: res.data.values
                })
            })
    }
    hapusTable = (id) => {
        console.log("memanggil hapus table")
        const { produk } = this.state
        const data = qs.stringify({
            id_produk: id
        })
        axios.delete(api + '/hapusProduk',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    produk: produk.filter(produk => produk.id_produk !== id),
                    display: 'block',
                })
                console.log(json.data.values)
            } else {
                console.log('error mendelete data' + json.data.values)
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
                    <Col xs="12">
                        <Alert color="success" className="mt-3" style={{ display: this.state.display }}>
                            {this.state.response}
                        </Alert>

                        <Table className="table">
                            <thead>
                                <tr>
                                    <th> <center>Gambar</center> </th>
                                    <th> <center>Nama Produk</center></th>
                                    <th> <center>Kategori</center></th>
                                    <th> <center>Harga</center></th>
                                    <th> <center>Kuantitas</center></th>
                                    <th> <center>Deskripsi</center></th>
                                    <th> <center>Edit</center></th>

                                </tr>
                            </thead>
                            <tbody >
                                {this.state.produk.map(produk =>
                                    <tr key={produk.id_produk}>
                                        <td> <img src={process.env.PUBLIC_URL + '/assets/' + produk.foto} alt="" width="70px" /></td>
                                        <td>{produk.nama_produk}</td>
                                        <td>{produk.kategori}</td>
                                        <td>Rp. {produk.harga}</td>
                                        <td>
                                            <center>
                                                {produk.kuantitas}
                                            </center>
                                        </td>
                                        <td style={{ width :'400px'}}>{produk.deskripsi}</td>


                                        <td className="button d-flex align-items-center justify-content-center p-4">
                                            <Link to={
                                                {
                                                    pathname: '/edit-product',
                                                    state: {
                                                        id: produk.id_produk,
                                                        nama_produk: produk.nama_produk,
                                                        harga: produk.harga,
                                                        kuantitas: produk.kuantitas,
                                                        kategori: produk.kategori,
                                                        deskripsi: produk.deskripsi,
                                                        foto: produk.foto,
                                                    }
                                                }

                                            }>
                                                <Button className="btn-edit">
                                                    <Icon icon="clarity:note-edit-line" color="white" />
                                                </Button>

                                            </Link>
                                            <div className="m-1"></div>
                                            <Button onClick={() => this.hapusTable(produk.id_produk)} className="btn-delete" color="danger">
                                                <Icon icon="bi:trash-fill" color="white" />
                                            </Button>


                                        </td>

                                    </tr>
                                )}


                            </tbody>
                        </Table>
                        


                    </Col>
                </Row>
            </Container>

        )
    }
}
