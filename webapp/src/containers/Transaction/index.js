import React from 'react'
import PropTypes from 'prop-types'

const Transaction = props => (
  <div>
    <p>{props.transaction.amount}</p>
    <p>{props.transaction.bin}</p>
    <p>{props.transaction.last_4}</p>
    <p>{props.transaction.nsu}</p>
    <p>{props.transaction.card_name}</p>
    <p>{props.transaction.expiration_date}</p>
    <p>{props.transaction.installments}</p>
    <p>{props.transaction.processor}</p>
    <p>{props.transaction.response_code}</p>
    <p>{props.transaction.payment_type}</p>
  </div>
)

Transaction.propTypes = {
  transaction: PropTypes.shape({
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
  }),
}

Transaction.defaultProps = {
  transaction: {
    amount: null,
    bin: null,
    last_4: null,
    nsu: null,
    card_name: null,
    expiration_date: null,
    installments: null,
    processor: null,
    response_code: null,
  },
}

export default Transaction
