import React from 'react'
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
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBsKqfrtyruZZJFrFa5BxEYoNRZ3IE0v4c')
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
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        lat={Number(this.state.search.results[0].geometry.location.lat)}
        lng={Number(this.state.search.results[0].geometry.location.lng)}
      />
    )
  }
}

export default SearchMaps
