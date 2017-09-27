import React from 'react'
import PropTypes from 'prop-types'


const Phones = props => (
  <div className="phones">
    {
      props.phones.map(phone => (
        <div>
          <p>{phone.phone_type}</p>
          <p>{phone.area_code}</p>
          <p>{phone.country_code}</p>
          <p>{phone.number}</p>
        </div>
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
