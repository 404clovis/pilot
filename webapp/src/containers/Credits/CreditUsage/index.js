import React from 'react'
import PropTypes from 'prop-types'


const CreditUsage = props => (
  <div className="CreditUsage">
    {
      props.CreditUsage.map(Usage => (
        <div className="Usage">
          <p>{Usage.credit_type}</p>
          <p>{Usage.last_date}</p>
          <p>{Usage.last_amount}</p>
          <p>{Usage.last_purchase_id}</p>
          <p>{Usage.total_transactions}</p>
          <p>{Usage.total_amount}</p>
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
