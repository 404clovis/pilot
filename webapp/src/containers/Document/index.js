import React from 'react'
import PropTypes from 'prop-types'

const Document = props => (

)

const Transactions = props => (
  <div className="documents">
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

Document.propTypes = {
  documents: PropTypes.shape({
    number: PropTypes.string,
    document_type: PropTypes.string,
  }),
}

Document.defaultProps = {
  document: {
    number: '',
  },
}

export default Document
