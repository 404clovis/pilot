import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'


class WorkTitle extends React.Component {
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
        {this.props.work_places[0] &&
        <Grid>
          <Row>
            <Col tv={2} desk={2} tablet={2} palm={2} >
              <div className={style.familyTitle}>CNPJ</div>
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2} >
              <div className={style.familyTitle}>EMPRESA</div>
            </Col>
            <Col tv={2} desk={2} tablet={2} palm={2} >
              <div className={style.familyTitle}>CIDADE</div>
            </Col>
            <Col tv={1} desk={1} tablet={2} palm={2} >
              <div className={style.familyTitle}>ESTADO</div>
            </Col>
          </Row>
        </Grid>
        }
      </div>
    )
  }
}

WorkTitle.propTypes = {
  work_places: PropTypes.shape({
    document_number: PropTypes.string,
    name: PropTypes.string,
    street: PropTypes.string,
    neighborhood: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string,
    zip_code: PropTypes.string,
    unit: PropTypes.string,
    apartment: PropTypes.string,
    house: PropTypes.string,
    block: PropTypes.string,
    allotment: PropTypes.string,
    complement: PropTypes.string,
    state: PropTypes.string,
  }),
}

WorkTitle.defaultProps = {
  work_places: {
    name: null,
  },
}

export default WorkTitle
