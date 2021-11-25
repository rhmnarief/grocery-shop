import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarComp from "./NavbarComp";

function TransactionDetails() {
  let { id_invoice } = useParams();

  useEffect(() => {
    console.log(id_invoice);
  }, []);
  return (
    <div className="transaction">
      <NavbarComp />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 d-flex">
            <h2>Ini adalah tr</h2>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
                <td>
                  
                  <tr>

                  </tr>
                </td>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
