import React, { useState, useEffect } from 'react'
import { Col, Button } from 'reactstrap'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './Style/Comp.css'
import axios from 'axios';

const api = "http://localhost:3001"

function RecomendComp(props) {
    // const initRecomend = {
    //     id_produk: '',
    //     nama_produk: '',
    //     jumlah: '',
    //     foto: '',
    //     harga: ''
    // }
    // const [recomend, setRecomend] = useState(initRecomend)
    // const getRecomend = () => {
    //     console.log('menjalakan recoemnd')
    //     const kategori = props.kategori
    //     console.log(kategori)
    //     axios.get('http://localhost:3001/rekomendasi/asd', { kategori: 'Produk Cepat Saji' })
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    // }
    // useEffect(() => {
    //     getRecomend()
    // }, [])
    return (
        <Col xs="3">
            {/* <p>{props.kategori}</p> */}
            {/* <div className="product btn-success">
                <div className="image d-flex align-items-center justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/assets/' + recomend.images} width="290px" alt="" />
                </div>
                <div className="detail p-2 mt-2">
                    <div className="desc">
                        <p>{recomend.produk}</p>
                        <p> <strong>Rp. {recomend.harga}</strong></p>
                    </div>
                    <div className="cart">

                        <Link to={`/product/${recomend.id_produk}`} >
                            <Button className="cart-btn">
                                <Icon icon="icon-park-outline:buy" color="black" width="24px" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </Col>

    )
}

export default RecomendComp
