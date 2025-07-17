export default function RateTable() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Assets</th>
            <th>Source Chain</th>
            <th>Target Chain</th>
            <th>Service Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              USDT<br/>
              USDC<br/>
              BNB<br/>
              ETH<br/>
              TRX
            </th>
            <td>
              BNB Smart Chain<br/>
              Ethereum<br/>
              Tron
            </td>
            <td>Xone</td>
            <td>Free</td>
          </tr>
          <tr>
            <th>
              USDT<br/>
              USDC<br/>
              BNB<br/>
              ETH<br/>
              TRX
            </th>
            <td>
              Xone
            </td>
            <td>
              BNB Smart Chain<br/>
              Ethereum<br/>
              Tron
            </td>
            <td>0.03%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}