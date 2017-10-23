import React from 'react'
import PropTypes from 'prop-types'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import SkypeIcon from 'react-icons/lib/fa/skype'
import CellPhone from 'react-icons/lib/md/phone-iphone'
import LandLine from 'react-icons/lib/md/local-phone'
import BillingIcon from 'react-icons/lib/fa/credit-card-alt'
import ShippingIcon from 'react-icons/lib/md/local-shipping'
import CustomerIcon from 'react-icons/lib/fa/home'
import style from '../style.css'


const Phones = props => (
  <div className={style.phones}>
    <span className={style.pointIcon}>
      {(() => {
        switch (props.typePhone) {
          case 'billing': return <BillingIcon />
          case 'shipping': return <ShippingIcon />
          case 'customer': return <CustomerIcon />
          default: return <CustomerIcon />
        }
      })()}
    </span>
    {
      props.phones.map(phone => (
        <span className={style.phonesItem}>
          {(() => {
            switch (phone.phone_type) {
              case 'cellphone': return <CellPhone />
              case 'landline': return <LandLine />
              default: return <CellPhone />
            }
          })()}
           ({phone.area_code}) {phone.number.substring(0, (phone.number.length - 4))
            .concat(' ')
            .concat(phone.number.substring((phone.number.length - 4), phone.number.length))}
          <a className={style.facebookIcon} href={'https://www.facebook.com/search/people/?q='.concat(phone.area_code).concat(phone.number)} target="_blank" >
            <FacebookIcon />
          </a>
          <a className={style.skypeIcon} href={'tel:'.concat(phone.area_code).concat(phone.number)} >
            <SkypeIcon />
          </a>
        </span>
      ))
    }
  </div>
)

Phones.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      phone_type: PropTypes.string,
      area_code: PropTypes.string,
      country_code: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  typePhone: PropTypes.string,
}

Phones.defaultProps = {
  phones: [],
  typePhone: null,
}

export default Phones
