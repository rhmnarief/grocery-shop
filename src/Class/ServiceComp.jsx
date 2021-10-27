import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Icon } from '@iconify/react';
import './Style/Comp.css';

function ServiceComp(props) {
    return (
        <Col xs="3">
            <div className="service d-flex align-items-center justify-content-center">
                <div className="logo">
                    <Icon width="50px" icon={props.icon} />
                </div>
                <div className="detail">
                    <p className="head">
                        <strong>
                            {props.head}
                        </strong>
                    </p>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>

        </Col>

    )


}

export default ServiceComp

