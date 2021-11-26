import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Container, Row, Col , Table} from 'reactstrap'
import NavbarComp from '../Function/NavbarComp'
import axios from 'axios'

const api = 'http://localhost:3001/'
function DetailTransaction() {
    const [invoices, setInvoice] = useState([])
    
    const {id_transaction} = useParams()

    const getDetailInvoice = () =>{
        axios.get(`${api}detailInvoice/${id_transaction}`)
        .then((res) => {
            setInvoice(res.data.values)
        })
    }
  
    useEffect(() => {
        getDetailInvoice()
    }, [])
    return (
        <div className="class">
            <NavbarComp />
            <Container>
                <Row>
                    <Col xs="12">
                    <Table className="table">
                            <thead>
                                <tr>
                                    <th> <center>ID Transaction</center> </th>
                                    <th> <center>Product</center></th>
                                    <th> <center>Quantity</center></th>
                                    <th> <center>Price</center></th>
                                    <th> <center>Total</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    invoices?.map((invoice) =>
                                        <tr key={invoice.id}>
                                            <td>
                                                <center>
                                                 {invoice.id_transaksi}
                                                </center>
                                            </td>
                                            <td width="300px">
                                                <center>
                                                <img src={process.env.PUBLIC_URL + '/assets/' + invoice.foto}  alt="produk" width="70px" />
                                                {invoice.nama_produk}
                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                    {invoice.jumlah}

                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                {invoice.harga}

                                            </center>
                                            </td>
                                            <td>
                                                <center>
                                                {invoice.harga * invoice.jumlah}
                                                </center>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default DetailTransaction
