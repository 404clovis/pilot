import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'


const Device = props => (
  <div className={style.device}>
    <p>{props.device.ip}</p>
    <p>{props.device.platform}</p>
    <p>{props.device.session_id}</p>
    <p>{props.device.lat}</p>
    <p>{props.device.lng}</p>
  </div>
)

Device.propTypes = {
  device: PropTypes.shape({
    ip: PropTypes.string,
    platform: PropTypes.string,
    session_id: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
}

Device.defaultProps = {
  device: null,
}

export default Device
