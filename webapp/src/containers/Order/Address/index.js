import React from 'react'
import PropTypes from 'prop-types'
import FlagIconFactory from 'react-flag-icon-css'
import CopyToClipboard from 'react-copy-to-clipboard'
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
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          { this.props.address && AddressTitle(this.props.address.country) }
        </CopyToClipboard>
        { this.props.address.street &&
        FormatStreet(
          this.props.address.street,
          this.props.address.number,
          this.props.address.complement) }
        {this.props.address.neighborhood && FormatNeighborhood(this.props.address.neighborhood)}
        {this.props.address.city &&
        FormatCity(this.props.address.city, this.props.address.state)}
        {this.props.address.zip_code && FormatZipCode(this.props.address.zip_code)}
      </div>
    )
  }
}

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
