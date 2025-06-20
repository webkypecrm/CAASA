import React from 'react'

const TaxInvoice = () => {
  return (
    <div>
        <div style={{ background: "#eee", margin: 0, padding: "50px 0" }}>
  <table
    width="800px"
    border={0}
    cellPadding={0}
    cellSpacing={0}
    align="center"
    style={{ background: "#fff", fontFamily: "arial" }}
  >
    <tbody>
      <tr>
        <td style={{ height: 30 }} />
      </tr>
      <tr>
        <td>
          <h3 style={{ textAlign: "center" }}>Tax Invoice</h3>
        </td>
      </tr>
      <tr>
        <td style={{ height: 10 }} />
      </tr>
      <tr>
        <td>
          <table
            width="700px"
            border={1}
            cellPadding={0}
            cellSpacing={0}
            align="center"
            style={{
              background: "#fff",
              fontFamily: "arial",
              fontSize: 14,
              borderColor: "#ddd",
              borderWidth: 1
            }}
          >
            <tbody>
              <tr>
                <td rowSpan={2} style={{ padding: 10, width: "70%" }}>
                  <h3 style={{ marginTop: 0, marginBottom: 2 }}>
                    AM REALTY SOLUTIONS PVT.LTD.
                  </h3>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    Plot No.6, 8th Floor, Magnus Tower, Sector-73 Noida,
                    Distt.-Gautam Buddha Nagar
                  </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    GSTIN/UIN: 09AAYCA1739P1ZP
                  </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    State Name : Uttar Pradesh, Code : 09
                  </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    CIN: U70109UP2023PTC176302
                  </p>
                </td>
                <td style={{ padding: 10, textAlign: "right" }}>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>Dated</p>
                  <h3 style={{ marginTop: 0, marginBottom: 2 }}>
                    <input type="date" name="invoice_date" required="" />
                  </h3>{" "}
                </td>
              </tr>
              <tr>
                <td style={{ padding: 10, textAlign: "right" }}>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    Mode/Terms of Payment
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: 10, width: "70%" }}>
                  <h5 style={{ marginTop: 0, marginBottom: 2 }}>Buyer</h5>
                  <h3 style={{ marginTop: 0, marginBottom: 2 }}>
                    SUDHA -SURAT
                  </h3>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    "FLAT NO -11, ROHNA PUSTAA K ROAD, SURAT, NEAR SHIV MANDIR,
                    395008,
                  </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>PAN/IT No : </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    State Name :
                    <input
                      type="text"
                      name="invoice_state"
                      defaultValue="GUJRAT"
                      required=""
                    />
                    , Code :
                    <input
                      type="number"
                      name="invoice_state_code"
                      onkeyup="showHideTable(this.value) "
                      required=""
                    />
                  </p>
                  <p style={{ marginTop: 0, marginBottom: 2 }}>
                    Place of Supply :{" "}
                    <input
                      type="text"
                      name="invoice_supply_state"
                      required=""
                    />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table
            width="700px"
            border={1}
            cellPadding={0}
            cellSpacing={0}
            align="center"
            style={{
              background: "#fff",
              fontFamily: "arial",
              fontSize: 13,
              borderColor: "#ddd",
              borderWidth: 1,
              borderTop: 0
            }}
          >
            <tbody>
              <tr>
                <td style={{ width: 10, padding: 8, verticalAlign: "top" }}>
                  Sl No.
                </td>
                <td style={{ padding: 10, verticalAlign: "top" }}>
                  Particulars{" "}
                </td>
                <td style={{ padding: 10, verticalAlign: "top" }}>HSN/SAC </td>
                <td style={{ padding: 10, verticalAlign: "top" }}>Quantity </td>
                <td style={{ padding: 10, verticalAlign: "top" }}>Amount</td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td style={{ padding: 10, borderBottom: 0 }}>1</td>
                <td style={{ padding: 10, borderBottom: 0, fontSize: 14 }}>
                  <b>Booking Amount Received (IGST)</b>{" "}
                </td>
                <td style={{ padding: 10, borderBottom: 0 }}>997221 </td>
                <td style={{ padding: 10, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>1,780.00</b>
                </td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }}>
                  2
                </td>
                <td
                  style={{
                    padding: 10,
                    textAlign: "right",
                    borderTop: 0,
                    borderBottom: 0,
                    fontSize: 14
                  }}
                >
                  <b>OUTPUT IGST</b>{" "}
                </td>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>320.40</b>
                </td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }}>
                  3
                </td>
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    fontSize: 14
                  }}
                >
                  <b>Short &amp; Excess</b>{" "}
                </td>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>-0.40</b>
                </td>
              </tr>
              <tr className="UPState">
                <td style={{ padding: 10, borderBottom: 0 }}>1</td>
                <td style={{ padding: 10, borderBottom: 0, fontSize: 14 }}>
                  <b>Booking Amount Received (IGST)</b>{" "}
                </td>
                <td style={{ padding: 10, borderBottom: 0 }}>9972 </td>
                <td style={{ padding: 10, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>1,780.00</b>
                </td>
              </tr>
              <tr className="UPState">
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }}>
                  2
                </td>
                <td
                  style={{
                    padding: 10,
                    textAlign: "right",
                    borderTop: 0,
                    borderBottom: 0,
                    fontSize: 14
                  }}
                >
                  <b>OUTPUT CGST</b>{" "}
                </td>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>160.20</b>
                </td>
              </tr>
              <tr className="UPState">
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }}>
                  3
                </td>
                <td
                  style={{
                    padding: 10,
                    textAlign: "right",
                    borderTop: 0,
                    borderBottom: 0,
                    fontSize: 14
                  }}
                >
                  <b>OUTPUT SGST</b>{" "}
                </td>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>160.20</b>
                </td>
              </tr>
              <tr className="UPState">
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }}>
                  4
                </td>
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    fontSize: 14
                  }}
                >
                  <b>Short &amp; Excess</b>{" "}
                </td>
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td style={{ padding: 10, borderTop: 0, borderBottom: 0 }} />
                <td
                  style={{
                    padding: 10,
                    borderTop: 0,
                    borderBottom: 0,
                    textAlign: "right",
                    fontSize: 14
                  }}
                >
                  <b>-0.40</b>
                </td>
              </tr>
              <tr>
                <td style={{ padding: 10 }} />
                <td style={{ padding: 10, textAlign: "right" }}>Total </td>
                <td style={{ padding: 10 }} />
                <td style={{ padding: 10 }} />
                <td style={{ padding: 10, textAlign: "right", fontSize: 14 }}>
                  <b>₹ 2,100.00</b>
                </td>
              </tr>
              <tr>
                <td style={{ padding: 10 }} colSpan={5}>
                  <p style={{ marginTop: 0, marginBottom: 5 }}>
                    Amount Chargeable (in words){" "}
                  </p>
                  <h3 style={{ marginTop: 0, marginBottom: 5 }}>
                    INR two thousand one hundred Rupees Only
                  </h3>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table
            width="700px"
            border={1}
            cellPadding={0}
            cellSpacing={0}
            align="center"
            style={{
              background: "#fff",
              fontFamily: "arial",
              fontSize: 13,
              borderColor: "#ddd",
              borderWidth: 1,
              borderTop: 0
            }}
          >
            <tbody>
              <tr className="otherState" style={{ display: "none" }}>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  Taxable{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={4}
                >
                  {" "}
                  Integrated Tax{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "center" }}>
                  {" "}
                  Total
                </td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  Value{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={2}
                >
                  {" "}
                  Rate{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={2}
                >
                  {" "}
                  Amount{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "center" }}>
                  {" "}
                  Tax Amount
                </td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  1,780.00{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={2}
                >
                  {" "}
                  18%{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={2}
                >
                  {" "}
                  320.40{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "right" }}>
                  {" "}
                  320.40
                </td>
              </tr>
              <tr className="otherState" style={{ display: "none" }}>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  <b>Total:1,780.00</b>{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={2}
                >
                  {" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={2}
                >
                  {" "}
                  <b>320.40</b>{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "right" }}>
                  {" "}
                  <b>320.40</b>
                </td>
              </tr>
              <tr className="UPState">
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  Taxable{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={2}
                >
                  {" "}
                  Central Tax{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={2}
                >
                  {" "}
                  State Tax{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "center" }}>
                  {" "}
                  Total
                </td>
              </tr>
              <tr className="UPState">
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  Value{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={1}
                >
                  {" "}
                  Rate{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={1}
                >
                  {" "}
                  Amount{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={1}
                >
                  {" "}
                  Rate{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "center" }}
                  colSpan={1}
                >
                  {" "}
                  Amount{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "center" }}>
                  {" "}
                  Tax Amount
                </td>
              </tr>
              <tr className="UPState">
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  1,780.00{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  9%{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  160.20{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  9%{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  160.20{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "right" }}>
                  {" "}
                  320.40
                </td>
              </tr>
              <tr className="UPState">
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={4}
                >
                  {" "}
                  <b>Total:1,780.00</b>{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  <b>160.20</b>{" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                </td>
                <td
                  style={{ padding: "3px 10px", textAlign: "right" }}
                  colSpan={1}
                >
                  {" "}
                  <b>160.20</b>{" "}
                </td>
                <td style={{ padding: "3px 10px", textAlign: "right" }}>
                  {" "}
                  <b>320.40</b>
                </td>
              </tr>
              <tr>
                <td style={{ padding: 10, textAlign: "left" }} colSpan={9}>
                  Tax Amount (in words) :{" "}
                  <b> INR three hundred and twenty Rupees .four Paise Only</b>
                  <br />
                  <br />
                  <br />
                  <br /> Ticket Id: SH-65133 <br /> Remarks:{" "}
                  <input type="text" name="invoice_remark" />
                  <br /> Invoice No. <br /> Company’s PAN :&nbsp; &nbsp;
                  AAYCA1739P
                  <br />
                  <br />
                  <br />
                  <br />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table
            width="700px"
            border={1}
            cellPadding={0}
            cellSpacing={0}
            align="center"
            style={{
              background: "#fff",
              fontFamily: "arial",
              fontSize: 13,
              borderColor: "#ddd",
              borderWidth: 1,
              borderTop: 0
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: 10,
                    textAlign: "center",
                    verticleAlign: "top"
                  }}
                >
                  {" "}
                  Customer’s Seal and Signature
                  <br />
                  <br />
                  <br />
                </td>
                <td
                  style={{
                    padding: 10,
                    textAlign: "center",
                    verticleAlign: "top"
                  }}
                >
                  {" "}
                  for AM REALTY SOLUTIONS PVT.LTD.
                  <br />
                  <br />
                  <br /> Authorised Signatory{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td style={{ height: 30 }} />
      </tr>
      <tr>
        <td style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              background: "#01b8ff",
              padding: 10,
              color: "#fff",
              textDecoration: "none",
              fontSize: 13,
              borderRadius: 5,
              border: 0
            }}
          >
            Save &amp; Send
          </button>
        </td>
      </tr>
      <tr>
        <td style={{ height: 30 }} />
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default TaxInvoice