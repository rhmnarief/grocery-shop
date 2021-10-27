import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap'
import './Style/Comp.css'

export default class JumbotronComp extends Component {
    render() {
        return (
            <Container>
                <Row className="d-flex align-items-center justify-content-center p-3">
                    <Col xs="7">
                        <div className="big-sales d-flex align-items-center justify-content-center">
                            <Jumbotron>
                                <h1 className="display-3">Fresh & Healthy Organic Food</h1>
                                <div className="details d-flex align-items-center mb-4">
                                    <div className="line mr-2"></div>
                                    <div className="desc">
                                        <h2 className="lead">
                                            <strong>Sales up to</strong>
                                        </h2>
                                        <p>Free shipping on all your order.</p>
                                    </div>
                                </div>
                                <p className="lead">
                                    <Button className="button">
                                        Shop now
                                        <span>  </span>
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                    </Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </Col>
                    <Col xs="5">
                        <div className="jumbo">
                            <div className="sales">
                                <Jumbotron>
                                    <p>SUMMER SALE</p>
                                    <h1>
                                        <strong>
                                            75% OFF
                                        </strong>
                                    </h1>
                                    <p className="lead">Only Fruit & Vegetable.</p>
                                    <p className="lead">
                                        <Button >
                                            Shop now
                                            <span>  </span>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </Button>
                                    </p>
                                </Jumbotron>
                            </div>
                            <br />
                            <div className="sales d-flex align-items-center justify-content-center">
                                <Jumbotron>
                                    <center>
                                        <p>BEST DEAL</p>
                                        <h1 className="desc"><strong>Special Products Deal of the Month</strong></h1>
                                        <p className="lead">
                                            <Button >
                                                Shop now
                                                <span>  </span>
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </Button>
                                        </p>
                                    </center>

                                </Jumbotron>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        )
    }
}
