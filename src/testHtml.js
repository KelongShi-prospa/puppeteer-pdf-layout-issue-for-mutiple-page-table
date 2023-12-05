var getTestHtml = (longContent) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <style>
  
        body,
        html {
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact;
        }
  
        * {
          box-sizing: border-box;
        }
  
        body {
          background-color: #ffffff;
          font-size: 14px;
          line-height: 14px;
          color: #262626;
          display: flex;
          flex-direction: column;
        }
  
        p,
        h1,
        h2 {
          margin: 0;
        }
  
        .section {
          margin-bottom: 16px;
        }
  
        .flex-row {
          display: flex;
          align-items: flex-start;
        }
  
        .right-align {
          margin-left: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
  
        .semi-bold {
          font-weight: 600;
        }
  
        .summary {
          font-size: 10px;
        }
  
        .row-margin {
          margin-bottom: 4px;
        }
  
        .row-label {
          min-width: 70px;
          margin-right: 4px;
        }
  
        #address {
          max-width: 215px;
          font-size: 14px;
        }
  
        #name {
          margin-bottom: 2px;
        }
  
        .address-ln {
          line-height: 20px;
        }
  
        #account_info {
          padding: 16px;
          font-size: 14px;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 8px;
          max-width: 450px;
          width: 337px;
          word-break: break-all;
        }
  
        .account-label {
          min-width: 105px;
          margin-right: 16px;
        }
  
        #account_info .flex-row {
          padding: 4px 0;
        }
  
        #company-name {
          word-break: break-word;
          text-align: right;
        }
  
        #contact {
          font-size: 14px;
        }
  
        .overview {
          width: 300px;
          font-size: 14px;
          margin-bottom: 32px;
        }
  
        .overview .flex-row {
          padding: 8px 0;
          margin: 0;
        }
  
        .overview .flex-row:not(:last-child) {
          border-bottom: 1px solid #f5f5f5;
        }
  
        #overview_label {
          margin-bottom: 15px;
          font-size: 20px;
        }
  
        #statement_table {
          text-align: left;
          border-spacing: 0;
        }
  
        thead {
          display: table-header-group;
          break-inside: avoid;
        }
  
        td {
          padding: 8px 0;
          border-bottom: 1.5px solid #f5f5f5;
          border: 1px solid;
        }
  
        th {
          padding: 8px 0;
          border-top: 1.5px solid #262626;
          border-bottom: 1.5px solid #262626;
        }
  
        tr {
          height: 38px;
        }
  
        .col {
          width: 100px;
        }
  
        .dateCol {
          width: 100px;
        }
  
        .text-right {
          text-align: right;
        }
  
        .no-transactions {
          color: #737373;
        }
  
        .transaction-detail {
          font-size: 11px;
        }
      </style>
    </head>
  
    <body>
      <div style="height: 200px; 1px solid red;">
        Additional area in body (If we removed this element, the issue will disappear.)
      </div>
      <table id="statement_table">
        <thead>
          <tr>
            <th class="dateCol">Date</th>
            <th>Description</th>
            <th class="col text-right">Money Out</th>
            <th class="col text-right">Money In</th>
            <th class="col text-right">Balance</th>
          </tr>
        </thead>
        <tr class="semi-bold">
          <td>24 Oct 2023</td>
          <td>Opening balance</td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>Interest Incurred</td>
          <td class="text-right">$52.20</td>
          <td class="text-right">0</td>
          <td class="text-right">$62,152.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $0 Interest: $10<br />Fees: $0<br />Reference: External
              reference: lant0r09ibluy53d75cj</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$62,142.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $54957.8 Interest: $42.2<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$55,000.00</td>
          <td class="text-right">$7,142.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$7,132.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: 248yyociglfbfqw3rlor</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$7,122.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$7,112.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: 0ajaqo3hl2g713jkqgtv</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$7,102.20</td>
        </tr>
  
        <tr>
          <td>25 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$7,092.20</td>
        </tr>
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1026209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,998.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,988.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: 2oy6qaap51lwzgqq48zj</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,978.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,968.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: y1w4hp3zztrfxxz9rje4</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,958.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,948.14</td>
        </tr>
  
        <tr>
          <td>26 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: mda3qq8un30qq0q1sf6b ${longContent ? 'apple'.repeat(5) : ''}</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,938.14</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>Interest Incurred</td>
          <td class="text-right">$5.83</td>
          <td class="text-right">0</td>
          <td class="text-right">$6,943.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $4.17 Interest: $5.83<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,933.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,923.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,913.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,903.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,893.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,883.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,873.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,863.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference:
              DD1027209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,853.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,843.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: 7gc9ie5hlyp2lib6pw5g</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,833.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,823.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0<br />Reference: External
              reference: whz414na57lufuq60o7y</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,813.97</td>
        </tr>
  
        <tr>
          <td>27 Oct 2023</td>
          <td>
            Extra Loan Repayment
            <br />
            <span class="transaction-detail"
              >Principal: $10 Interest: $0<br />Fees: $0</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,763.97</td>
        </tr>
  
        <tr>
          <td>31 Oct 2023</td>
          <td>
            Direct Debit
            <br />
            <span class="transaction-detail"
              >Principal: $4.46 Interest: $5.54<br />Fees: $0<br />Reference:
              DD1031209195</span
            >
          </td>
          <td class="text-right">0</td>
          <td class="text-right">$10.00</td>
          <td class="text-right">$6,576.39</td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

module.exports = getTestHtml;