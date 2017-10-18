import React from 'react'
import PropTypes from 'prop-types'
import PurchaseIds from './PurchaseIds/index'
import CreditUsage from './CreditUsage/index'
import style from '../style.css'

const Credits = props => (
  <div className={style.credits}>
    {props.credits.credit_type && <span>{props.credits.credit_type}</span>}
    {props.credits.description && <span>{props.credits.description}</span>}
    {props.credits.amount && <span>{props.credits.amount}</span>}
    {props.credits.purchase_ids &&
      <span>Compras</span> &&
      <PurchaseIds PurchaseIds={props.credits.purchase_ids} />
    }
    {props.credits.credit_usage &&
      <span>Uso de créditos</span> &&
      <CreditUsage CreditUsage={props.credits.credit_usage} />
    }
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
