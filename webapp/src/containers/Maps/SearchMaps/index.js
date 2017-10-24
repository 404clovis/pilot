import React from 'react'
import PropTypes from 'prop-types'
import LocalizationMap from '../LocalizationMap'

class SearchMaps extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: null,
      errors: {},
    }
  }

  componentDidMount () {
    fetch(('https://maps.googleapis.com/maps/api/geocode/json?address=').concat(this.props.address).concat('&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c'))
      .then(response => response.json())
      .then(response => this.setState({ search: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.search) {
      return null
    }
    return (
      <LocalizationMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJw1iMAmKTHWYaAj6cFccSvEXrwBwJxrM&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%', width: '300px' }} />}
        containerElement={<div style={{ height: '300px', width: '300px' }} />}
        mapElement={<div style={{ height: '100%', width: '300px' }} />}
        lat={Number(this.state.search.results[0].geometry.location.lat)}
        lng={Number(this.state.search.results[0].geometry.location.lng)}
      />
    )
  }
}

SearchMaps.propTypes = {
  address: PropTypes.string.isRequired,
}

export default SearchMaps
