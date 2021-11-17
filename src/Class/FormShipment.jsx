import React, { Component } from 'react'
import { Col, Container, Input, Label, Row, FormGroup, Button} from 'reactstrap'
import axios from 'axios';
import './Style/FormShipment.css'

const api = "http://localhost:3001";
export default class FormShipment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            address :'',
            city:'',
            states :'',
            zip : '',
            email :'',
            phone :'',
            additional: '',
            response: '',
            display: 'none'
        }
    }
    
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.changeForm({
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            address :this.state.address,
            city:this.state.city,
            states :this.state.states,
            zip : this.state.zip,
            email : this.state.email,
            phone : this.state.phone,
            additional: this.state.additional,
            response: this.state.response,
        })
    }

    putInformation = () =>{
        console.log('menjalankan put information')
        axios.put(api + '/tambahAlamat' ,{
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            address :this.state.lastname,
            city: this.state.city,
            states : this.state.states,
            zip : this.state.zip,
            email : this.state.email,
            phone : this.state.phone,
        }).then(json =>{
            if (json.data.status === 200){
                console.log("Data Berhasil Dikirim")
                this.setState({
                    response : json.data.values,
                    display: 'block'
                })
            }else{
                console.log("Data gagal dikirim")
                this.setState({
                    response : json.data.values,
                    display : 'block',
                })
            }
        })
    }

    componentDidMount(){

    }
   
    render() {
        return (
            <div className='form'>
                <h2>Billing Information</h2>
                <div className="identity d-flex align-items-center mb-2">
                    <div className="input">
                        <Label for="firstname">Firstname</Label>
                        <Input id="firstname" name="firstname" placeholder="Your first name" type="text" value={this.state.firstname} onChange={this.handleChange} />
                    </div>
                    <div className="input">
                        <Label for="lastname">Lastname</Label>
                        <Input id="lastname" name="lastname" placeholder="Your last name" type="text" value={this.state.lastname} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="input mb-2">
                    <Label>Street Address</Label>
                    <Input type="textarea" placeholder="Street Adress" name="address"  value={this.state.address} onChange={this.handleChange} />
                </div>
                <div className="address d-flex align-items-center mb-2">
                    <div className="input">
                        <FormGroup>
                            <Label for="exampleCity">
                                City
                            </Label>
                            <Input
                                id="exampleCity"
                                name="city"
                                value={this.state.city} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="input">

                        <FormGroup>
                            <Label for="exampleState">
                                State
                            </Label>
                            <Input
                                id="exampleState"
                                name="states"
                                value={this.state.states} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="input">
                        <FormGroup>
                            <Label for="exampleZip">
                                Zip
                            </Label>
                            <Input
                                id="exampleZip"
                                name="zip"
                                type="number"
                                value={this.state.zip} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="contact d-flex align-items-center">
                    <div className="input d-flex">
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                type="text"
                                id="exampleEmail"
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </div>
                    <div className="input d-flex">
                        <FormGroup>
                            <Label for="exampleEmail">
                                Phone
                            </Label>
                            <Input
                                type="number"
                                id="exampleEmail"
                                placeholder="Phone Number"
                                name="phone"
                                value={this.state.phone} 
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </div>
                </div>
                <hr />
                <div className="additional">
                    <h2>Additional Info</h2>
                    <Label>Order Notes (Optional)</Label>
                    <Input type="textarea" placeholder="Notes about your order, e.g. special notes for delivery"
                     value={this.state.additional} 
                     onChange={this.handleChange} />
                </div>
            


            </div>
        )
    }
}
