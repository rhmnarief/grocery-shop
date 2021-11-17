import React, { Component, useContext } from 'react'
import { Container, Row, Jumbotron, Button } from 'reactstrap'
import './CSS/style.css'
import JumbotronComp from '../Class/JumbotronComp'

import NavbarComp from './NavbarComp'
import ServiceComp from '../Class/ServiceComp'
import Product from '../Class/Product'
import axios from 'axios'
import { Link } from 'react-router-dom'


const api = 'http://localhost:3001'




class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searching: '',
            produk: [],
            respons: ''
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilProduk')
            .then(res => {
                console.log(res.data.values)
                this.setState({
                    produk: res.data.values
                })
            })
    }
    handleChange(e) {
        this.setState({
            searching: e.target.value
        })
    }
    render() {
        return (
            <div className="home">
                <NavbarComp
                    search={this.state.searching}
                />
                <JumbotronComp />
                <Container>
                    <Row className="layout-service">
                        <ServiceComp
                            icon="cil:truck"
                            head="Free Shipping"
                            desc="Free Shipping on all your order"
                        />
                        <ServiceComp
                            icon="carbon:phone"
                            head="Customer Support 24/7"
                            desc="Instant access to Support"
                        /> <ServiceComp
                            icon="icon-park-outline:people-safe"
                            head="100% Secure Payment"
                            desc="We ensure your money is save"
                        /> <ServiceComp
                            icon="cil:money"
                            head="Money-Back Guarantee"
                            desc="30 Days Money-Back Guarantee"
                        />
                    </Row>
                </Container>
                <Container >
                    <Row className="mt-5">
                        {
                            this.state.produk.map(produk =>
                                <Product
                                    key={produk.id_produk}
                                    produk={produk.nama_produk}
                                    harga={produk.harga.toString()}
                                    id={produk.id_produk}
                                    images={produk.foto}
                                />
                            )
                        }
                    </Row>
                </Container>


            </div>
        )
    }
}
export default Homepage
