import React from 'react'
import PropTypes from 'prop-types'
import ReactScrollbar from 'react-scrollbar-js'
import Address from '../Address'
import Documents from '../Documents/index'
import Phones from '../Phones/index'
import style from './../style.css'

const SizeScrollbar = { height: 280, width: 260 }

const Billing = props => (
  <ReactScrollbar style={SizeScrollbar}>
    <div className={style.billing}>
      <span>{props.billing.name.toUpperCase()}</span>
      <span>{props.billing.gender}</span>
      <Address address={props.billing.address} />
      <Documents documents={props.billing.documents} />
      <Phones phones={props.billing.phones} />
    </div>
  </ReactScrollbar>
)

Billing.propTypes = {
  billing: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        phone_type: PropTypes.string,
        area_code: PropTypes.string,
        country_code: PropTypes.string,
        number: PropTypes.string,
      })
    ),
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
