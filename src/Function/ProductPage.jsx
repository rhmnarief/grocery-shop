import React, { useState, useEffect, useContext, setItem, createContext } from 'react'
import { Container, Row, Col, Button, Alert } from 'reactstrap'
import './CSS/ProductPage.css'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import RecomendComp from '../Class/RecomendComp'

const api = 'http://localhost:3001'
function ProductPage() {

    const initNotif = {
        display: 'none',
        response: ''
    }
    const [notif, setNotif] = useState(initNotif)

    // get Details Data on product page

    const initialProduct = {
        deskripsi: "",
        foto: "",
        harga: 0,
        kategori: "",
        kuantitas: 0,
        nama_produk: "",
    }
    const initRecomend = {
        id_produk: '',
        nama_produk: '',
        jumlah: '',
        foto: '',
        harga: ''
    }
    const [recomend, setRecomend] = useState(initRecomend)

    let { id } = useParams()
    const [product, setProduct] = useState(initialProduct)


    const getProduct = () => {
        axios.get(api + '/tampilProduk/' + id)
            .then((res) => {
                console.log(res.data.values)
                setProduct(res.data.values[0])
            })
    }
    let Category = product.kategori
    const getRecomend = () => {
        console.log('ini kategori', Category)
        axios.get('http://localhost:3001/rekomendasi/' + Category)
            .then((results) => console.log(results.data))
    }


    // set tottal product
    const [total, setTotal] = useState(1)
    const minTotal = () => {
        if (total > 1) {
            setTotal(total - 1)
        }
    }

    const addTotal = () => {
        if (total < product.kuantitas) {
            setTotal(total + 1)
        }
    }

    const initKeranjang = {
        id_produk: id,
        nama_produk: product.nama_produk,
        jumlah: total,
        foto: product.foto,
        harga: product.harga,
    }
    const addKeranjang = () => {
        var currentKeranjang = localStorage.getItem("keranjang") ? JSON.parse(localStorage.getItem("keranjang")) : [initKeranjang]
        console.log("isi current keranjang:", currentKeranjang)
        // var combineKeranjang = []
        // combineKeranjang.push(currentKeranjang)
        console.log(currentKeranjang.length)
        var found = false
        currentKeranjang.forEach(element => {
            if (element.id_produk == initKeranjang.id_produk) {
                element.jumlah += initKeranjang.jumlah
                found = true
                return
            }
        });
        if (!found) {
            currentKeranjang.push(initKeranjang)
        }
        localStorage.setItem("keranjang", JSON.stringify(currentKeranjang))
        setTimeout(() => {
            setNotif({
                notif: 'block',
                response: 'Produk berhasil ditambahkan ke keranjang'
            })
        })
    }



    // didmounted implementation in hooks
    useEffect(() => {
        getProduct()
        getRecomend()

    }, [])



    return (
        <div className="product-page">
            <NavbarComp />
            <Container >
                <Alert color="success" style={{ display: notif.display }}>
                    {notif.response}
                </Alert>
                <Row className="desc mt-3 p-5">
                    <Col xs="5" className="details">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + '/assets/' + product.foto} alt="" width="400px" />
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className="detail">
                            <h1>
                                {product.nama_produk}
                            </h1>
                            <h3>
                                <strong>
                                    Rp. {product.harga}
                                </strong>
                            </h3>
                            <hr />
                            <p>{product.deskripsi}</p>
                            <hr />
                            <div className="transaction d-flex align-items-center justify">
                                <div className="button d-flex align-items-center">
                                    <Button className="min" onClick={() => minTotal()} >
                                        -
                                    </Button>
                                    <div className="m-2"></div>

                                    <p className="total mb-0">{total}</p>
                                    <div className="m-2"></div>
                                    <Button className="plus"
                                        onClick={() => addTotal()}>
                                        +
                                    </Button>
                                </div>
                                <Button className="btn-cart btn-success" onClick={addKeranjang}>
                                    Add to Cart
                                    <Icon icon="icon-park-outline:buy" color="white" width="24px" />
                                </Button>
                                <Button className="btn-fav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </Button>
                            </div>
                            <hr />
                            <p> <strong>Category :</strong> {product.kategori} </p>
                            <div className="share d-flex align-items-center">
                                <p className="m-0" > <strong>Share :</strong> </p>
                                <div className="m-2"></div>
                                <div className="social">
                                    <Button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </Button>
                                    <Button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </Button>
                                    <Button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>


    )
}
export default ProductPage