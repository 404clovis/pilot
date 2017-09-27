import React from 'react'
import PropTypes from 'prop-types'


const Transactions = props => (
  <div className="transactions">
    {
      props.transactions.map(transaction => (
        <div className="transaction">
          <p>{transaction.amount}</p>
          <p>{transaction.bin}</p>
          <p>{transaction.last_4}</p>
          <p>{transaction.nsu}</p>
          <p>{transaction.card_name}</p>
          <p>{transaction.expiration_date}</p>
          <p>{transaction.installments}</p>
          <p>{transaction.processor}</p>
          <p>{transaction.response_code}</p>
          <p>{transaction.payment_type}</p>
        </div>
      ))
    }
  </div>
)

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      bin: PropTypes.string,
      last_4: PropTypes.string,
      nsu: PropTypes.string,
      card_name: PropTypes.string,
      expiration_date: PropTypes.string,
      installments: PropTypes.number,
      processor: PropTypes.string,
      response_code: PropTypes.string,
      payment_type: PropTypes.string,
    })
  ),
}

Transactions.defaultProps = {
  transactions: null,
}

export default Transactions
