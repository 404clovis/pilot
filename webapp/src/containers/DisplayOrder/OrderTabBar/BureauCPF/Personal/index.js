import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'

class Personal extends React.Component {
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
        <Grid>
          <Row>
            <Col tv={4} desk={4} tablet={4} palm={7} >
              {this.props.personal.document_number}
            </Col>
          </Row>
          <Row>
            <Col tv={3} desk={3} tablet={3} palm={5} >
              {this.props.personal.name}
            </Col>
            <Col tv={1} desk={1} tablet={1} palm={2} >
              {this.props.personal.gender}
            </Col>
          </Row>
          <Row>
            <Col tv={3} desk={3} tablet={3} palm={5} >
              {this.props.personal.date_of_birth}
            </Col>
            <Col tv={1} desk={1} tablet={1} palm={2} >
              AGE
            </Col>
          </Row>
          <Row>
            <Col tv={4} desk={4} tablet={4} palm={7} >
              {this.props.personal.sign}
            </Col>
          </Row>
          <Row>
            <Col tv={4} desk={4} tablet={4} palm={7} >
              {this.props.personal.rip}
            </Col>
          </Row>
          <Row>
            <Col tv={4} desk={4} tablet={4} palm={7} >
              {this.props.personal.status_federal_revenue}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Personal.propTypes = {
  personal: PropTypes.shape({
    date_of_birth: PropTypes.string,
    document_number: PropTypes.string,
    document_type: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    rip: PropTypes.bool,
    sign: PropTypes.string,
    state: PropTypes.string,
    status_federal_revenue: PropTypes.string,
    status_federal_revenue_date: PropTypes.string,
  }),
}

Personal.defaultProps = {
  personal: {
    name: null,
  },
}

export default Personal
