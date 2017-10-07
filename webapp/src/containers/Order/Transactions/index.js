import React from 'react'
import PropTypes from 'prop-types'
import PaymentType from '../Converter/'
import style from './style.css'

const CentsToDollar = value => (
  <span className="currency">
    {(Number(value) / 100).toFixed(2).replace('.', ',')}
  </span>
)

const FormatExpirationDate = value => (
  <span className={style.expiration}>
    ({value.substring(0, 2)
      .concat('/')
      .concat(value.substring(value.length - 2, value.length))})
  </span>
)

const FormatInstallments = (value, installments) => (
  <span className={style.installments}>
    ({installments} x {CentsToDollar(
      Number(value / Number(installments))
    )})
  </span>
)

const Transactions = props => (
  <div className={style.transactions}>
    {
      props.transactions.map(transaction => (
        <div className={style.transaction}>
          <span className={style.paymentType}>
            {PaymentType(transaction.payment_type)}
          </span>
          <span className={style.paymentInfo}>{props.currency} {CentsToDollar(transaction.amount)}
            {FormatInstallments(transaction.amount, transaction.installments)}
          </span>
          <span className={style.paymentCard}>
            {transaction.bin} **** {transaction.last_4}
            {FormatExpirationDate(transaction.expiration_date)}
          </span>
          <span className={style.paymentCardName}>
            {transaction.card_name}
          </span>
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
  currency: PropTypes.string,
}

Transactions.defaultProps = {
  transactions: null,
  currency: null,
}

export default Transactions
