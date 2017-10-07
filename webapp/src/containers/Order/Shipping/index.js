import React from 'react'
import PropTypes from 'prop-types'
import Address from '../Address'
import Phones from '../Phones'
import style from './../style.css'


const Shipping = props => (
  <div className={style.shipping}>
    <span>{props.shipping.scheduled_date}</span>
    <span>{props.shipping.name.toUpperCase()}</span>
    <span>{props.shipping.gender}</span>
    <Address address={props.shipping.address} />
    <Phones phones={props.shipping.phones} />
    <span className={style.shippingMethod}>
     Tipo de entrega: {props.shipping.shipping_method}</span>
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
