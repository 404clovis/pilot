import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/pt-br'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import ReactScrollbar from 'react-scrollbar-js'
import PropTypes from 'prop-types'
import Phones from '../Phones'
import style from './../style.css'


const SizeScrollbar = { height: 280, width: 260 }


const InternalCard = props => (
  <div className={style.internalCard}>
    <span className={style.internalCardTitle}>
      Dispositivo de compra
    </span>
    <span className={style.internalCardElement}>
      Endereço IP: {props.device.ip}
    </span>
    {props.device.session_id && <span className={style.internalCardElement}>
      Sessão: {props.device.session_id}
    </span>}
    {props.device.platform && <span className={style.internalCardElement}>
      Plataforma: {props.device.platform}
    </span>}
    {props.device.lat && props.device.lng && <span className={style.internalCardElement}>
      Localização: {props.device.lat} {props.device.lng}
    </span>}
  </div>
)

const Customer = props => (
  <ReactScrollbar style={SizeScrollbar}>
    <div className={style.customer}>
      <span className={style.customerName}>
        {props.customer.name.toUpperCase()} ({props.customer.register_id})
      </span>
      <span className={style.customerEmail}>{props.customer.email}
        <a
          className={style.facebookIcon}
          href={'https://www.facebook.com/search/people/?q='.concat(props.customer.email)}
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </span>
      <span>{props.customer.register_date}</span>
      <span>{props.customer.number_of_previous_orders}</span>
      <span>{props.customer.gender}</span>
      {props.customer.date_of_birth &&
        <span>
          <Moment format="DD/MM/YYYY">{props.customer.date_of_birth}</Moment> (t
          <Moment from={props.customer.date_of_birth}>{Date.now()}</Moment>)
        </span>}
      <Phones phones={props.customer.phones} />
      {props.device && <InternalCard device={props.device} />}
    </div>
  </ReactScrollbar>
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
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        phone_type: PropTypes.string,
        area_code: PropTypes.string,
        country_code: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        document_type: PropTypes.string,
        document_number: PropTypes.string,
      })
    ),
  }),
  device: PropTypes.shape({
    ip: PropTypes.string,
    platform: PropTypes.string,
    session_id: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
}

Customer.defaultProps = {
  customer: {
    email: '',
    number_of_previous_orders: 0,
  },
  device: {
    ip: null,
  },
}

InternalCard.propTypes = {
  device: PropTypes.shape({
    ip: PropTypes.string,
    platform: PropTypes.string,
    session_id: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
}

InternalCard.defaultProps = {
  device: {
    ip: null,
  },
}

export default Customer
