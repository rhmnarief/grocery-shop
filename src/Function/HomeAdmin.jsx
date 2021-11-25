import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import TableProduct from '../Class/TableProduct'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import NavbarComp from './NavbarComp'
import TableInvoice from '../Class/TableInvoice'

const api = 'http://localhost:3001'
function HomeAdmin() {

    return (
        <div>
            <NavbarComp />
            <Container className="mt-3">
                <Row>
                    <Col xs="12">
                        <Link to="/tambah-produk">
                            <Button className="btn btn-success">
                                Tambah Produk
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <TableProduct />
            <TableInvoice />

        </div>
    )
}

export default HomeAdmin
