import React from 'react'
import PropTypes from 'prop-types'
import LocalizationMap from '../LocalizationMap'

class SearchMaps extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      shippingAddress: null,
      billingAddress: null,
      customerAddress: null,
      errors: {},
    }
  }

  componentDidMount () {
    fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.shippingAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
      .then(response => response.json())
      .then(response => this.setState({ shippingAddress: response }))
      .catch(errors => this.setState({ errors }))
    fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.billingAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
      .then(response => response.json())
      .then(response => this.setState({ billingAddress: response }))
      .catch(errors => this.setState({ errors }))
    fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.customerAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
      .then(response => response.json())
      .then(response => this.setState({ customerAddress: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.billingAddress) {
      return null
    }
    if (!this.state.shippingAddress) {
      return null
    }
    if (!this.state.customerAddress) {
      return null
    }
    return (
      <LocalizationMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJw1iMAmKTHWYaAj6cFccSvEXrwBwJxrM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%', width: '300px' }} />}
        containerElement={<div style={{ height: '300px', width: '300px' }} />}
        mapElement={<div style={{ height: '100%', width: '300px' }} />}
        billingLat={Number(this.state.billingAddress.results[0].geometry.location.lat)}
        billingLng={Number(this.state.billingAddress.results[0].geometry.location.lng)}
        shippingLat={Number(this.state.shippingAddress.results[0].geometry.location.lat)}
        shippingLng={Number(this.state.shippingAddress.results[0].geometry.location.lng)}
        customerLat={Number(this.state.customerAddress.results[0].geometry.location.lat)}
        customerLng={Number(this.state.customerAddress.results[0].geometry.location.lng)}
      />
    )
  }
}

SearchMaps.propTypes = {
  billingAddress: PropTypes.string.isRequired,
  shippingAddress: PropTypes.string.isRequired,
  customerAddress: PropTypes.string.isRequired,
}

export default SearchMaps
