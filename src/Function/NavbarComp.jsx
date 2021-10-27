import React, { useState, createContext, useReducer, useEffect } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    InputGroup,
    InputGroupAddon,
    Button,
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Icon } from '@iconify/react';
import './CSS/style.css'
import axios from 'axios';

export const searchContext = createContext()

const api = 'http://localhost:3001'

function NavbarComp(props) {
    // const [result, setResult] = useReducer([])
    const [search, setSearch] = useState('')


    const handleInputChange = (event) => {
        console.log(event.target.value)
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    // const getSearch = () => {
    //     axios.get(api + '/search/' + search)
    //         .then(res => {
    //             setResult({
    //                 result: res.data.values
    //             })
    //         })
    // }

    // useEffect(() => {
    //     getSearch()
    // }, [])


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Navbar">
            {/* <searchContext.Consumer value={{
                search,
                setSearch
            }}>
            </searchContext.Consumer> */}
            <Container>
                <Row>
                    <Navbar color="white" light expand="sm">
                        <Col xs="2">
                            <div className="navbar-brand">
                                <NavbarBrand href="/">
                                    <img src={process.env.PUBLIC_URL + '/assets/Logo.svg'} alt="" />
                                </NavbarBrand>
                            </div>
                        </Col>
                        <Col xs={{ size: 4, offset: 2 }}>
                            <div className="search-bar d-flex align-items-center justify-content-center">
                                <Nav navbar>
                                    <InputGroup className="line border">
                                        <center className="d-flex align-items-center">
                                            <i class="fas fa-search"></i>
                                        </center>
                                        <input
                                            placeholder="Search"
                                            type="text"
                                            value={search.data}
                                            onChange={handleInputChange}
                                        />
                                        <InputGroupAddon addonType="append">
                                            <Button class="btn btn-success" color="success" type="submit">Search</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Nav>
                            </div>
                        </Col>
                        <Col xs={{ size: 2, offset: 2 }}>
                            <div className="cart d-flex align-items-center justify-content-center">
                                <div className="icon">
                                    <Icon icon="carbon:favorite" width="32px" color="black" />
                                </div>
                                <div className="devider"></div>
                                <div className="cart-shop d-flex align-items-center justify-content-center">
                                    <div className="cart-icon">
                                        <Icon icon="bi:cart" width="32px" />
                                    </div>
                                    <div className="detail">
                                        <p className="m-0">Shopping cart:</p>
                                        <strong>
                                            <p className="m-0">Rp.200.000</p>
                                        </strong>
                                    </div>
                                </div>


                            </div>

                        </Col>
                    </Navbar>

                </Row>

            </Container>




        </div>
    )
}

export default NavbarComp
