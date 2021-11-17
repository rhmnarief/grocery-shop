import axios from 'axios'
import React, { Component } from 'react'
import { Col, Container, Row, Button, Table, Navbar } from 'reactstrap'
import CartProduct from './CartProduct'
import NavbarComp from './NavbarComp'
import './CSS/CartPage.css'


const api = 'http://localhost:3001'

function getStorageValue(keranjang, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(keranjang);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}



export default class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keranjang: [],
            product: [],
            response: '',
            display: 'none'
        }
    }
    // getTotalPayment = () => {
    //     keranjang.forEach(element => {
    //         if (element.id_produk) {
    //             const total = element.jumlah * element.harga
    //             const seluruh = total + total
    //             return seluruh
    //         }
    //     });
    // }
    componentDidMount() {

    }


    render() {
        const localData = localStorage.getItem('keranjang');
        const data = JSON.parse(localData)
        return (
            <div className="cart-page">
                <Container>
                    <NavbarComp />
                    <Row className="d-flex align-items-center">

                        <h2 className="head"> <center>My Shopping Cart</center> </h2>
                        <Col xs="8">
                            <Table className="m-0">
                                <tr>
                                    <th> <center>PRODUCT</center> </th>
                                    <th> <center>PRICE</center> </th>
                                    <th> <center>QUANTITY</center> </th>
                                    <th>SUBTOTAL</th>
                                    <th>Remove</th>
                                </tr>
                                {
                                    data.map(item => {
                                        return (
                                            <tr key={item.id_produk}>
                                                <td className="d-flex align-items-center justify-content-center ">
                                                    <img src={process.env.PUBLIC_URL + '/assets/' + item.foto} alt="" width="100px" />
                                                    {
                                                        item.nama_produk
                                                    }
                                                </td>
                                                <td>
                                                    <center>
                                                        Rp. {item.harga}
                                                    </center>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <Button className="min"
                                                        // onClick={minTotal}
                                                        >
                                                            -
                                                        </Button>
                                                        <div className="m-2"></div>

                                                        <p className="total mb-0">
                                                            {item.jumlah}
                                                        </p>
                                                        <div className="m-2"></div>
                                                        <Button className="plus"
                                                        // onClick={() => item.jumlah += 1}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </td>
                                                <td>Rp. {item.jumlah * item.harga}</td>
                                                <td>
                                                    <Button className="btn-delete btn-danger" style={{ "background-color": 'red', }}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </Table>
                        </Col>
                        <Col className="total-payment" xs="4">
                            <div className="row">
                                <h3 className="head">Cart Total</h3>
                                <div className="sub-total d-flex">
                                    <p>Subtotal</p>
                                    <p className="ml-auto">Rp.20.000</p>
                                </div>
                                <hr />
                                <div className="sub-total d-flex">
                                    <p>Shipping</p>
                                    <p className="ml-auto">Rp.20.000</p>
                                </div>
                                <hr />
                                <div className="sub-total d-flex">
                                    <p>Subtotal</p>
                                    <p className="ml-auto">Rp.20.000</p>
                                </div>
                                <Button className="btn btn-success">
                                    Proeed to Checkout
                                </Button>

                            </div>


                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}

