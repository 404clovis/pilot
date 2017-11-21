import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'


class AddressTitle extends React.Component {
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
      <div>
        {this.props.address[0] &&
        <Grid>
          <Row>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              <div className={style.familyTitle}>RUA</div>
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              <div className={style.familyTitle}>NÚMERO</div>
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              <div className={style.familyTitle}>COMPLEMENTO</div>
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              <div className={style.familyTitle}>BAIRRO</div>
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2}>
              <div className={style.familyTitle}>CIDADE</div>
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              <div className={style.familyTitle}>ESTADO</div>
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2}>
              <div className={style.familyTitle}>CEP</div>
            </Col>
          </Row>
        </Grid>
        }
      </div>
    )
  }
}

AddressTitle.propTypes = {
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

AddressTitle.defaultProps = {
  address: {
    zip_code: null,
  },
}

export default AddressTitle
