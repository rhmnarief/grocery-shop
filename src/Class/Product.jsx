import React from 'react'
import { Col, Button } from 'reactstrap'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Style/Comp.css'

function Product(props) {
    return (
        <Col xs="3">
            <div className="product btn-success">
                <div className="image d-flex align-items-center justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/assets/' + props.images} width="290px" alt="" />
                </div>
                <div className="detail p-2 mt-2">
                    <div className="desc">
                        <p>{props.produk}</p>
                        <p> <strong>Rp. {props.harga}</strong></p>
                    </div>
                    <div className="cart">

                        <Link to={`/product/${props.id}`} >
                            <Button className="cart-btn">
                                <Icon icon="icon-park-outline:buy" color="black" width="24px" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Col>

    )
}

export default Product
