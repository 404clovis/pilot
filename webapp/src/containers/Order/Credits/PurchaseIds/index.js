import React from 'react'
import PropTypes from 'prop-types'


const PurchaseIds = props => (
  <div className="PurchaseIds">
    {
      props.PurchaseIds.map(PurchaseId => (
        <div className="purchaseId">
          <span>{PurchaseId.purchase_type}</span>
          <span>{PurchaseId.value}</span>
        </div>
      ))
    }
  </div>
)

PurchaseIds.propTypes = {
  PurchaseIds: PropTypes.arrayOf(
    PropTypes.shape({
      purchase_type: PropTypes.string,
      value: PropTypes.string,
    })
  ),
}

PurchaseIds.defaultProps = {
  PurchaseIds: [],
}


export default PurchaseIds
