import React, { Component } from "react";
import { Button } from "reactstrap";

const id = JSON.parse(localStorage.getItem('id'))
const API = 'http://localhost:3001'
export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname : this.props.location.state.firstname,
      lastname : '',
      address :'',
      city:'',
      states :'',
      zip : '',
      email :'',
      phone :'',
      additional: '',
      response: '',
      payment:'',
      id_user: id,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  postInformation = () => {
    console.log("test postInformation");
    axios.put(API + "/tambahAlamat", Form).then((json) => {
      if (json === 200) {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      } else {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <div className="container">
          <Col xs={{ offset: 2, size: 8 }}>
            <div className="this.state">
              <Link className="btn btn-success" to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </Link>
              <h2 className="mt-4">Billing Inthis.stateation</h2>
              <div className="identity d-flex align-items-center mb-2">
                <div className="input">
                  <Label for="firstname">Firstname</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="Your first name"
                    type="text"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input">
                  <Label for="lastname">Lastname</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Your last name"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="input mb-2">
                <Label>Street Address</Label>
                <Input
                  type="textarea"
                  placeholder="Street Adress"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address d-flex align-items-center mb-2">
                <div className="input">
                  <this.stateGroup>
                    <Label for="exampleCity">City</Label>
                    <Input
                      id="exampleCity"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </this.stateGroup>
                </div>
                <div className="input">
                  <this.stateGroup>
                    <Label for="exampleState">State</Label>
                    <Input
                      id="exampleState"
                      name="states"
                      value={this.state.states}
                      onChange={this.handleChange}
                    />
                  </this.stateGroup>
                </div>
                <div className="input">
                  <this.stateGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input
                      id="exampleZip"
                      name="zip"
                      type="number"
                      value={this.state.zip}
                      onChange={this.handleChange}
                    />
                  </this.stateGroup>
                </div>
              </div>
              <div className="contact d-flex align-items-center">
                <div className="input d-flex">
                  <this.stateGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="text"
                      id="exampleEmail"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </this.stateGroup>
                </div>
                <div className="input d-flex">
                  <this.stateGroup>
                    <Label for="exampleEmail">Phone</Label>
                    <Input
                      type="number"
                      id="exampleEmail"
                      placeholder="Phone Number"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </this.stateGroup>
                </div>
              </div>
              <hr />
              <div className="additional">
                <h2>Additional Info</h2>
                <Label>Order Notes (Optional)</Label>
                <Input
                  type="textarea"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  name="additional"
                  value={this.state.additional}
                  onChange={this.handleChange}
                />
              </div>
              <Button className="btn btn-success" onClick={this.postInformation()}>
                  Submit
              </Button>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
