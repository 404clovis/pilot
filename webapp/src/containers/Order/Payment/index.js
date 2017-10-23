import React from 'react'
import PropTypes from 'prop-types'
import ReactScrollbar from 'react-scrollbar-js'
import Transactions from '../Transactions/index'

import style from './../style.css'

const PaymentCurrencyConverter = {
  BRL: 'R$',
  USD: 'U$',
  EUR: '€',
  ARS: '$',
}

const PaymentStatusConverter = {
  authorized: 'Autorizado',
}

const CentsToDollar = value => (
  <span className="currency">
    {(Number(value) / 100).toFixed(2).replace('.', ',')}
  </span>
)

const ShippingAmount = value => (
  <span className="shipping-value">(Frete: {CentsToDollar(value)})</span>
)

const PaymentCurrency = input => PaymentCurrencyConverter[input]
const PaymentStatus = input => PaymentStatusConverter[input]

const SizeScrollbar = { width: 200, height: 180 }

const Payment = props => (
  <ReactScrollbar style={SizeScrollbar}>
    <div className={style.payment}>
      <span className={style.paymentAmount}>
        <span className="currency-code">{PaymentCurrency(props.payment.currency)} </span>
        <span className="total-amount">{CentsToDollar(props.payment.total_amount)} </span>
        <span className="shipping-amount">
          {ShippingAmount(props.payment.shipping_amount)}
        </span>
      </span>
      {/* <p>{props.payment.card_fingerprint}</p>
      <p>{props.payment.is_recurrence}</p> */}
      <span className={style.paymentStatus}>{PaymentStatus(props.payment.status)}</span>
      <Transactions
        transactions={props.payment.transactions}
        currency={PaymentCurrency(props.payment.currency)}
      />
    </div>
  </ReactScrollbar>
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
