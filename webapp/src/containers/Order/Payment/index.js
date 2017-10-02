import React from 'react'
import PropTypes from 'prop-types'
import Transactions from '../Transactions/index'


const Payment = props => (
  <div>
    <p>{props.payment.total_amount}</p>
    <p>{props.payment.shipping_amount}</p>
    <p>{props.payment.currency}</p>
    <p>{props.payment.card_fingerprint}</p>
    <p>{props.payment.is_recurrence}</p>
    <p>{props.payment.status}</p>
    <hr />
    <Transactions transactions={props.payment.transactions} />
  </div>
)

Payment.propTypes = {
  payment: PropTypes.shape({
    total_amount: PropTypes.number.isRequired,
    shipping_amount: PropTypes.number.isRequired,
    currency: PropTypes.string,
    card_fingerprint: PropTypes.string,
    is_recurrence: PropTypes.bool,
    status: PropTypes.string,
    transactions: PropTypes.arrayOf(PropTypes.object),
  }),
}

Payment.defaultProps = {
  payment: {
    name: '',
    transactions: [],
  },
}

export default Payment
