import React, { Component } from "react";
import { Table, Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

const api = "http://localhost:3001";
export default class TableInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
    };
  }
  getAllInvoice() {}
  componentDidMount() {
    axios.get(api + "/tampilSemuaInvoice").then((res) => {
      this.setState({ invoices: res.data.values });
      console.log(this.state.invoices);
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12">
              <Table className="table">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <center>ID</center>{" "}
                    </th>
                    <th>
                      {" "}
                      <center>Tanggal Transaksi</center>
                    </th>
                    <th>
                      {" "}
                      <center>Nama</center>
                    </th>
                    <th>
                      {" "}
                      <center>Alamat</center>
                    </th>
                    <th>
                      {" "}
                      <center>Jumlah</center>
                    </th>
                    <th>
                      {" "}
                      <center>Payment</center>
                    </th>
                    <th>
                      {" "}
                      <center>Status</center>
                    </th>
                    <th>
                      {" "}
                      <center>Action</center>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.invoices?.map((invoice) => (
                    <tr key={invoice.id_invoice}>
                      <td>
                        <center>{invoice.id_transaksi}</center>
                      </td>
                      <td>
                        <center>{invoice.transaksi_date.split("T")[0]}</center>
                      </td>
                      <td>
                        <center>
                          {invoice.firstname} {invoice.lastname}
                        </center>
                      </td>
                      <td>
                        <center>
                          {invoice.address}, {invoice.city}, {invoice.states},{" "}
                          {invoice.zip}
                        </center>
                      </td>
                      <td>
                        <center>Rp. {invoice.total}</center>
                      </td>
                      <td>
                        <center>
                          {invoice.status === 0 ? "On Search" : "Done"}
                        </center>
                      </td>
                      <td>
                        <center>{invoice.payment}</center>
                      </td>
                      <td className="button d-flex align-items-center justify-content-center p-4">
                          <Button className="btn btn-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                          </Button>
                          <div className="m-1">

                          </div>
                          <Button className="btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-check2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                          </Button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
