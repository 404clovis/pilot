import React from 'react'
import PropTypes from 'prop-types'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import style from '../style.css'

const PhoneTypeConverter = { landline: 'FIXO', cellphone: 'CELULAR' }

const PhoneType = input => PhoneTypeConverter[input]

const Phones = props => (
  <div className={style.phones}>
    <span className={style.addressTitle}>
      TELEFONES
    </span>
    {
      props.phones.map(phone => (
        <span className={style.phonesItem}>
          {PhoneType(phone.phone_type)}:
          ({phone.area_code}) {phone.number}
          <a className={style.facebookIcon} href={'https://www.facebook.com/search/people/?q='.concat(phone.area_code).concat(phone.number)} target="_blank" >
            <FacebookIcon />
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
}

Phones.defaultProps = {
  phones: [],
}

export default Phones
