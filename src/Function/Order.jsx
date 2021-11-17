import React, { useEffect, useState } from 'react'
import './CSS/Order.css'


function Order(props) {
    return (
            <div className="detail d-flex align-items-center">
                <div className="desc d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL + '/assets/' + props.foto} width="60px" alt="" />
                    <p className="m-2">{props.nama_produk} x {props.jumlah} </p>
                </div>
                <div className="price ml-auto">
                    <p className="m-0">{props.harga * props.jumlah}</p>
                </div>
            </div>
       
    )
}


export default Order
