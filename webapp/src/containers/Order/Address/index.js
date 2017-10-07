import React from 'react'
import PropTypes from 'prop-types'
import FlagIconFactory from 'react-flag-icon-css'
import style from './../style.css'


const FlagIcon = FlagIconFactory(React)

const FormatZipCode = zip => (
  <span className={style.zip}>
    {zip.substring(0, 5).concat('-').concat(zip.substring(5))}
  </span>
)

const FormatStreet = (street, number, complement) => (
  <span className={style.street}>
    {street.toUpperCase()} {number.toUpperCase()} {complement.toUpperCase()}
  </span>
)

const FormatNeighborhood = neighborhood => (
  <span className={style.neighborhood}>
    {neighborhood.toUpperCase()}
  </span>
)

const CountryFlag = country => (
  <span className="countryFlag">
    <FlagIcon code={country.toString().toLowerCase()} squared="true" />
  </span>
)

const FormatCity = (city, state) => (
  <span className={style.city}>
    {city.toUpperCase()} - {state.toUpperCase()}
  </span>
)

const AddressTitle = country => (
  <span className={style.addressTitle}>
    ENDEREÇO {country && CountryFlag(country)}
  </span>
)

const Address = props => (
  <div className={style.address}>
    { props.address && AddressTitle(props.address.country) }
    { props.address.street &&
        FormatStreet(props.address.street, props.address.number, props.address.complement) }
    {props.address.neighborhood && FormatNeighborhood(props.address.neighborhood)}
    {props.address.city &&
        FormatCity(props.address.city, props.address.state)}
    {props.address.zip_code && FormatZipCode(props.address.zip_code)}
  </div>
)

Address.propTypes = {
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
}

Address.defaultProps = {
  address: {
    zip_code: null,
  },
}

export default Address
