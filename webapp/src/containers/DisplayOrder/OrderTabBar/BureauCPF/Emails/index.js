import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'

class Email extends React.Component {
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
        {this.props.phones.area_code &&
        '0'.concat(this.props.phones.area_code).concat(this.props.phones.number)
        }
      </div>
    )
  }
}

Email.propTypes = {
  phones: PropTypes.shape({
    area_code: PropTypes.string,
    number: PropTypes.string,
    carrier: PropTypes.string,
    full_number: PropTypes.string,
  }),
}

Email.defaultProps = {
  phones: {
    name: null,
  },
}

export default Email
