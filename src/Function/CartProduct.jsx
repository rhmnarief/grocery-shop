import React from 'react'
import { Col, Container, Row, Button, Table, Navbar } from 'reactstrap'


function CartProduct() {
    return (
        <div>
            <td>produk</td>
            <td>
                <center>
                    Rp. 10.000
                </center>
            </td>
            <td>
                <div className="d-flex align-items-center justify-content-center">
                    <Button className="min">-</Button>
                    <div className="m-2"></div>

                    <p className="total mb-0">
                        1
                    </p>
                    <div className="m-2"></div>
                    <Button className="plus">+</Button>
                </div>
            </td>
            <td>Subtotal</td>

        </div>
    )
}

export default CartProduct
