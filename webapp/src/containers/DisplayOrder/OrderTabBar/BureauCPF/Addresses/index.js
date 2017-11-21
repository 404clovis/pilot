import React from 'react'
import PropTypes from 'prop-types'
import MapsIcon from 'react-icons/lib/fa/map-marker'
import style from './../style.css'

import { Grid, Row, Col } from '../../../../../components/Grid'

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
        <Grid>
          <Row>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              {this.props.address.street}
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              {this.props.address.number}
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              {this.props.address.complement}
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              {this.props.address.neighborhood}
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              {this.props.address.city}
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              {this.props.address.state}
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              {this.props.address.zip_code}
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
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
            </Col>
          </Row>
        </Grid>
        }
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
