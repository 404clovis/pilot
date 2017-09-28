import React from 'react'
import PropTypes from 'prop-types'
import PurchaseIds from './PurchaseIds'
import CreditUsage from './CreditUsage'


const Credits = props => (
  <div className="credits">
    <p>{props.credits.credit_type}</p>
    <p>{props.credits.description}</p>
    <p>{props.credits.amount}</p>
    <span>Purchases</span>
    <PurchaseIds PurchaseIds={props.credits.purchase_ids} />
    <span>Credit Usage</span>
    <CreditUsage CreditUsage={props.credits.credit_usage} />
  </div>
)

Credits.propTypes = {
  credits: PropTypes.shape({
    credit_type: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    purchase_ids: PropTypes.arrayOf(
      PropTypes.shape({
        purchase_type: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    credit_usage: PropTypes.arrayOf(
      PropTypes.shape({
        credit_type: PropTypes.string,
        last_date: PropTypes.string,
        last_amount: PropTypes.string,
        last_purchase_id: PropTypes.string,
        total_transactions: PropTypes.string,
        total_amount: PropTypes.string,
      })
    ),
  }),
}

Credits.defaultProps = {
  credits: null,
}

export default Credits
