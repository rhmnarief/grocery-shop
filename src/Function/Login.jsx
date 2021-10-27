import React, { Component, Fragment, useContext, useState } from 'react';
import { Button, Container, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import '../Function/CSS/Login.css'
import { AuthContext } from '../App';

import axios from 'axios';

const qs = require('querystring')
const api = 'http://localhost:3001'



function Login(props) {
    const { dispatch } = useContext(AuthContext)
    const intialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(intialState)

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            email: data.email,
            password: data.password
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                    // redirect ke dashboard
                    props.history.push("/")
                } else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }
                throw res
            })

    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="login">
                        <div className="head">
                            <h1>Sign In</h1>
                        </div>
                        <div className="form mt-2">
                            <Form onSubmit={handleFormSubmit}>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="Email"
                                        value={data.email}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="Password"
                                        value={data.password}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>

                                {
                                    data.errorMessage && (
                                        <div className="alert alert-danger mt-2" role="alert">
                                            {data.errorMessage}
                                        </div>
                                    )
                                }
                                <center>
                                    <Button disabled={data.isSubmiting} className="btn-login btn-success mt-4" color="primary" >
                                        {
                                            data.isSubmiting ? (
                                                "...loading"
                                            ) :
                                                (
                                                    "Login"
                                                )
                                        }
                                    </Button>
                                </center>
                            </Form>

                        </div>
                    </div>
                </Col>

            </Row >



        </Container >

    )
}

export default Login;
