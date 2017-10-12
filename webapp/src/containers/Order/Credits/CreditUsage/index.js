import React from 'react'
import PropTypes from 'prop-types'
import style from '../../style.css'

const CreditUsage = props => (
  <div className={style.creditsUsage}>
    {
      props.CreditUsage.map(Usage => (
        <div className={style.creditUsage}>
          <span>{Usage.credit_type}</span>
          <span>{Usage.last_date}</span>
          <span>{Usage.last_amount}</span>
          <span>{Usage.last_purchase_id}</span>
          <span>{Usage.total_transactions}</span>
          <span>{Usage.total_amount}</span>
        </div>
      ))
    }
  </div>
)

CreditUsage.propTypes = {
  CreditUsage: PropTypes.arrayOf(
    PropTypes.shape({
      credit_type: PropTypes.string,
      last_date: PropTypes.string,
      last_amount: PropTypes.number,
      last_purchase_id: PropTypes.string,
      total_transactions: PropTypes.number,
      total_amount: PropTypes.number,
    })
  ),
}

CreditUsage.defaultProps = {
  CreditUsage: [],
}


export default CreditUsage
