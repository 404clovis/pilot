import React from 'react'
import PropTypes from 'prop-types'
import Address from '../Address'
import Phones from '../Phones'


const Shipping = props => (
  <div>
    <p>{props.shipping.scheduled_date}</p>
    <p>{props.shipping.shipping_method}</p>
    <p>{props.shipping.name}</p>
    <p>{props.shipping.gender}</p>
    <Address address={props.shipping.address} />
    <Phones phones={props.shipping.phones} />
  </div>
)

Shipping.propTypes = {
  shipping: PropTypes.shape({
    scheduled_date: PropTypes.string,
    shipping_method: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    phones: PropTypes.shape({
      phone_type: PropTypes.string,
      area_code: PropTypes.string,
      country_code: PropTypes.string,
      number: PropTypes.string,
    }),
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
  }),
}

Shipping.defaultProps = {
  shipping: null,
}

export default Shipping
