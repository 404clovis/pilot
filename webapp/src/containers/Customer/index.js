import React from 'react'
import PropTypes from 'prop-types'
import Documents from '../../containers/Address'


const Customer = props => (
  <div>
    <p>{props.customer.email}</p>
    <p>{props.customer.register_id}</p>
    <p>{props.customer.register_date}</p>
    <p>{props.customer.number_of_previous_orders}</p>
    <p>{props.customer.name}</p>
    <p>{props.customer.gender}</p>
    <p>{props.customer.date_of_birth}</p>
    <Documents />
  </div>
)

Customer.propTypes = {
  customer: PropTypes.shape({
    email: PropTypes.string,
    register_id: PropTypes.string,
    register_date: PropTypes.string,
    number_of_previous_orders: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    date_of_birth: PropTypes.string,
  }),
}

Customer.defaultProps = {
  customer: {
    email: '',
    number_of_previous_orders: 0,
  },
}

export default Customer
