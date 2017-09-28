import React from 'react'
import PropTypes from 'prop-types'


const Device = props => (
  <div className="device">
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
