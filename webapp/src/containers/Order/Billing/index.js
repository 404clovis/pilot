import React from 'react'
import PropTypes from 'prop-types'
import ReactScrollbar from 'react-scrollbar-js'
import BillingIcon from 'react-icons/lib/fa/credit-card-alt'
import ShippingIcon from 'react-icons/lib/md/local-shipping'
import Address from '../Address'
import Phones from '../Phones/index'
import style from './../style.css'

const SizeScrollbar = { height: 250, width: 660 }

class Billing extends React.Component {
  componentDidMount () {
    console.log('Loading billing component...')
    console.log(this.props.customer, null, 2)
  }

  render () {
    return (
      <ReactScrollbar style={SizeScrollbar}>
        <div className={style.billing}>
          <span className={style.billingName}>
            <span className={style.pointIcon}>
              <BillingIcon />
            </span>
            {
              this.props.billing.documents && this.props.billing.documents.map(document => (
                <span>
                  <span>{document.document_type}</span>
                  <span>{document.number}</span>
                </span>
              ))
            }
            {this.props.billing.name && this.props.billing.name.toUpperCase()}
          </span>
          { this.props.shipping.name && <span>
            <span className={style.pointIcon}>
              <ShippingIcon />
            </span>
            {this.props.shipping &&
            this.props.shipping.name &&
            this.props.shipping.name.toUpperCase()}
          </span> }
          <span>{this.props.billing && this.props.billing.gender}</span>
          {this.props.billing && this.props.billing.address &&
          <Address
            address={this.props.billing.address}
            typeAddress="billing"
          />
          }
          {this.props.shipping.address &&
          <Address
            address={this.props.shipping.address}
            typeAddress="shipping"
          />
          }
          {this.props.customer.address &&
          <Address
            address={this.props.customer.address}
            typeAddress="customer"
          />
          }
          {this.props.billing.phones &&
          <Phones
            phones={this.props.billing.phones}
            typePhone="billing"
          />}
          {this.props.shipping &&
          this.props.shipping.phones &&
          <Phones phones={this.props.shipping.phones} typePhone="shipping" />}
          {this.props.customer.phones &&
          <Phones
            phones={this.props.customer.phones}
            typePhone="customer"
          />}
          {this.props.shipping.shipping_method &&
            <span className={style.shippingMethod}>
               Tipo de entrega: {this.props.shipping.shipping_method}
            </span>
          }
        </div>
      </ReactScrollbar>
    )
  }
}

Billing.propTypes = {
  shipping: PropTypes.shape({
    scheduled_date: PropTypes.string,
    shipping_method: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    phones: PropTypes.shape({
      phone_type: PropTypes.string,
      area_code: PropTypes.string,
      country_code: PropTypes.string,
      number: PropTypes.string,
    }),
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
  }),
  billing: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        phone_type: PropTypes.string,
        area_code: PropTypes.string,
        country_code: PropTypes.string,
        number: PropTypes.string,
      })
    ),
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
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string,
        document_type: PropTypes.string,
      })
    ),
  }),
  customer: PropTypes.shape({
    email: PropTypes.string,
    register_id: PropTypes.string,
    register_date: PropTypes.string,
    number_of_previous_orders: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    date_of_birth: PropTypes.string,
    phones: PropTypes.arrayOf(
      PropTypes.shape({
        phone_type: PropTypes.string,
        area_code: PropTypes.string,
        country_code: PropTypes.string,
        number: PropTypes.string,
      })
    ),
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
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        document_type: PropTypes.string,
        document_number: PropTypes.string,
      })
    ),
  }),
}

Billing.defaultProps = {
  billing: null,
  shipping: null,
  customer: null,
}

export default Billing
