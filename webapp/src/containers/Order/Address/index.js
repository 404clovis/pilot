import React from 'react'
import PropTypes from 'prop-types'
import BillingIcon from 'react-icons/lib/fa/credit-card-alt'
import ShippingIcon from 'react-icons/lib/md/local-shipping'
import CustomerIcon from 'react-icons/lib/fa/home'
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
        <span className={style.pointIcon}>
          {(() => {
            switch (this.props.typeAddress) {
              case 'billing': return <BillingIcon />
              case 'shipping': return <ShippingIcon />
              case 'customer': return <CustomerIcon />
              default: return <CustomerIcon />
            }
          })()}
        </span>
        { this.props.address.street &&
        FormatStreet(
          this.props.address.street,
          this.props.address.number,
          this.props.address.complement,
          this.props.address.neighborhood,
          this.props.address.city,
          this.props.address.state,
          this.props.address.zip_code)}
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
  typeAddress: PropTypes.string,
}

Address.defaultProps = {
  address: {
    zip_code: null,
  },
  typeAddress: null,
}

export default Address
