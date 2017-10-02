import React from 'react'
import PropTypes from 'prop-types'
import Address from '../Address'


const Seller = props => (
  <div className="seller">
    <p>{props.seller.seller_id}</p>
    <p>{props.seller.name}</p>
    <p>{props.seller.document_number}</p>
    <Address address={props.seller.address} />
    <p>{props.seller.created_at}</p>
  </div>
)

Seller.propTypes = {
  seller: PropTypes.shape({
    seller_id: PropTypes.string,
    name: PropTypes.string,
    document_number: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      complement: PropTypes.string,
      country: PropTypes.string,
      neighborhood: PropTypes.string,
      number: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
      zip_code: PropTypes.string,
    }),
    created_at: PropTypes.string,
  }),
}

Seller.defaultProps = {
  seller: null,
}

export default Seller
