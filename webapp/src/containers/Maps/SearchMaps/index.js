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
    if (this.props.shippingAddress) {
      fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.shippingAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        .catch(errors => this.setState({ errors }))
    }

    if (this.props.billingAddress) {
      fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.billingAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
        .then(response => response.json())
        .then(response => this.setState({ billingAddress: response }))
        .catch(errors => this.setState({ errors }))
    }

    if (this.props.customerAddress) {
      fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.customerAddress).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
        .then(response => response.json())
        .then(response => this.setState({ customerAddress: response }))
        .catch(errors => this.setState({ errors }))
    }
  }

  render () {
    if (!this.state.shippingAddress && !this.state.customerAddress && !this.state.billingAddress) {
      return null
    }

    let centerLat = 0
    let centerLng = 0
    let shippingLat = null
    let shippingLng = null
    let billingLat = null
    let billingLng = null
    let customerLat = null
    let customerLng = null


    if (this.state.shippingAddress && this.state.shippingAddress.results.length > 0) {
      shippingLat = Number(this.state.shippingAddress.results[0].geometry.location.lat)
      shippingLng = Number(this.state.shippingAddress.results[0].geometry.location.lng)

      centerLat = shippingLat
      centerLng = shippingLng
    }

    if (this.state.customerAddress && this.state.customerAddress.results.length > 0) {
      customerLat = Number(this.state.customerAddress.results[0].geometry.location.lat)
      customerLng = Number(this.state.customerAddress.results[0].geometry.location.lng)

      centerLat = customerLat
      centerLng = customerLng
    }

    if (this.state.billingAddress && this.state.billingAddress.results.length > 0) {
      billingLat = Number(this.state.billingAddress.results[0].geometry.location.lat)
      billingLng = Number(this.state.billingAddress.results[0].geometry.location.lng)

      centerLat = billingLat
      centerLng = billingLng
    }

    console.log(centerLat)
    console.log(shippingLng)
    console.log(customerLng)
    console.log(billingLng)

    return (
      <LocalizationMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJw1iMAmKTHWYaAj6cFccSvEXrwBwJxrM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%', width: '300px' }} />}
        containerElement={<div style={{ height: '300px', width: '300px' }} />}
        mapElement={<div style={{ height: '100%', width: '300px' }} />}
        centerLat={centerLat || shippingLat || customerLat || billingLat || 0}
        centerLng={centerLng || shippingLng || customerLng || billingLng || 0}
        billingLat={billingLat}
        billingLng={billingLng}
        shippingLat={shippingLat}
        shippingLng={shippingLng}
        customerLat={customerLat}
        customerLng={customerLng}
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
