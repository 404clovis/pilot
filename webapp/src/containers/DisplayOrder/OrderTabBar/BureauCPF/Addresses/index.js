import React from 'react'
import PropTypes from 'prop-types'
import MapsIcon from 'react-icons/lib/fa/map-marker'
import style from './../style.css'


const FormatZipCode = zip => (
  <span className={style.zip}>
    {zip.substring(0, 5).concat('-').concat(zip.substring(5))}
  </span>
)

const FormatStreet = (street, number, complement, neighborhood, city, state, zipCode) => (
  <span className={style.street}>
    {street.toUpperCase()} {number.toUpperCase()} {complement.toUpperCase()}
    {neighborhood.toUpperCase()} {city.toUpperCase()} - {state.toUpperCase()}
    {zipCode && FormatZipCode(zipCode)}
  </span>
)

class Address extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: {},
      copied: false,
      errors: {},
    }
  }

  render () {
    return (
      <div className={style.address}>
        { this.props.address.street &&
        FormatStreet(
          this.props.address.street,
          this.props.address.number,
          this.props.address.complement,
          this.props.address.neighborhood,
          this.props.address.city,
          this.props.address.state,
          this.props.address.zip_code)}
        <a
          className={style.mapsIcon}
          href={'https://maps.google.com/?q='
            .concat(this.props.address.street)
            .concat(', ')
            .concat(this.props.address.number)
            .concat(', ')
            .concat(this.props.address.zip_code)
            .concat(', ')
            .concat(this.props.address.city)
            .concat(', ')
            .concat(this.props.address.state)
          }
          target="_blank"
        >
          <MapsIcon />
        </a>
      </div>
    )
  }
}

Address.propTypes = {
  address: PropTypes.shape({
    allotment: PropTypes.string,
    apartment: PropTypes.string,
    block: PropTypes.string,
    city: PropTypes.string,
    complement: PropTypes.string,
    house: PropTypes.string,
    neighborhood: PropTypes.string,
    number: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    unit: PropTypes.string,
    zip_code: PropTypes.string,
  }),
}

Address.defaultProps = {
  address: {
    zip_code: null,
  },
}

export default Address
