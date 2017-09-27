import React from 'react'
import PropTypes from 'prop-types'
import Address from '../../containers/Address'
import Documents from '../../containers/Documents'
import Phones from '../../containers/Phones'


const Billing = props => (
  <div>
    <p>{props.billing.name}</p>
    <p>{props.billing.gender}</p>
    <Address address={props.billing.address} />
    <Documents documents={props.billing.documents} />
    <Phones phones={props.billing.phones} />
  </div>
)

Billing.propTypes = {
  billing: PropTypes.shape({
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
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string,
        document_type: PropTypes.string,
      })
    ),
  }),
}

Billing.defaultProps = {
  billing: null,
}

export default Billing
