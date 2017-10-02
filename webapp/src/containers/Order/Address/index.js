import React from 'react'
import PropTypes from 'prop-types'

const Address = props => (
  <div>
    <p>{props.address.city}</p>
    <p>{props.address.complement}</p>
    <p>{props.address.country}</p>
    <p>{props.address.neighborhood}</p>
    <p>{props.address.number}</p>
    <p>{props.address.state}</p>
    <p>{props.address.street}</p>
    <p>{props.address.zip_code}</p>
  </div>
)

Address.propTypes = {
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
}

Address.defaultProps = {
  address: {
    zip_code: '',
  },
}

export default Address
