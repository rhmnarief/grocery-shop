import React,{useEffect} from "react";
import { Button, Container, Row, Col } from "reactstrap";
import NavbarComp from "./NavbarComp";
import {Link} from 'react-router-dom'

function Success() {
  useEffect(() => {
  }, [])
  return (
    <div className="success-transaction">
    <NavbarComp />
      <Container>
        <Row>
          <Col xs="12 mt-5">
            <center>
            <img
                src={process.env.PUBLIC_URL + "/assets/" + "hero-success.png"}
                width="668"
                alt=""
              />
            <h1 style={{ color: "#3D6D3F" }}>Transaction Success</h1>
            <Link className="btn btn-success" to="/profile">Track Your Order Here</Link>
            </center>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Success;
