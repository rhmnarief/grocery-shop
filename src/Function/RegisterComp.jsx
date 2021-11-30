import React, { Component, Fragment, useState } from 'react';
import { Button, Container, Form, FormGroup, Label, Input, Col, Row, Alert} from 'reactstrap';
import '../Function/CSS/Login.css'
// import { AuthContext } from '../App';
import axios from 'axios';

const qs = require('querystring')
const api = 'http://localhost:3001'

function RegisterComp(props) {
    // const { dispatch } = useContext(AuthContext)

  
    // const [alert, setAlert] = useState(initAlert)
 
    const intialState = {
        display :'none',
        response : '',
        opacity : 0,
        username: "",
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
            display : 'block',
            opacity : 1,
            response : 'Berhasil Menambahkan User!',
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            email: data.email,
            password: data.password,
            username: data.username

        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(api + '/auth/api/v1/register', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true && res.data.isRegistered === false ) {
                    setData({
                        ...data, 
                        isSubmitting : false,
                        errorMessage : "Berhasil menambahkan user!",
                    })
                    // setAlert({
                    //     ...alert,
                    //     display : 'block',
                    //     response : 'Berhasil Menambahkan User!'
                    // })
                    // redirect ke dashboard
                    // window.location.replace("http://localhost:3000/login")
                } else if(res.data.success === true && res.data.isRegistered === true ){
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: "Email anda telah terdaftar!"
                    })

                } 
                else {
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
                <Col xs="12">
                    <div className="login">
                        <div className="head">
                            <center>
                                <h1>Sign Up</h1>
                            </center>
                            <Alert class=""color="success" style={{ display: data.block , opacity: data.opacity }} >
                               {data.response}
                            </Alert>
                        </div>
                        <div className="form mt-2">
                            <Form onSubmit={handleFormSubmit}>
                            <FormGroup>
                                    <Input
                                        type="text"
                                        name="username"
                                        id="exampleEmail"
                                        placeholder="Username"
                                        value={data.username}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
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
                                                    "Register"
                                                )
                                        }
                                    </Button>
                                </center>
                                <a className="mt-5" href="/login">Sudah punya akun? Login</a>

                            </Form>

                        </div>
                    </div>
                </Col>

            </Row >



        </Container >

    )
}

export default RegisterComp;
