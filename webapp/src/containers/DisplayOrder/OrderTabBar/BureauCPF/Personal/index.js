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
    let rip = 'Não Encontrado'
    if (this.props.personal.rip === true) {
      rip = 'SIM'
    } else if (this.props.personal.rip === false) {
      rip = 'NÂO'
    }
    let birth = this.props.personal.date_of_birth
    const splited = birth.split('-')

    birth = splited[2]
      .concat('-')
      .concat(splited[1])
      .concat('-')
      .concat(splited[0])
      .concat('T00:00:00Z')
    console.log(birth)
    const ageDifMs = Date.now() - new Date(birth)
    console.log(ageDifMs)
    const ageDate = new Date(ageDifMs)
    console.log(ageDate)
    const age = Math.abs(ageDate.getUTCFullYear() - 1970)
    console.log(age)

    return (
      <div className={style.address}>
        <Grid>
          <Row>
            <Col tv={12} desk={12} tablet={12} palm={12} >
              {this.props.personal.document_number}
            </Col>
          </Row>
          <Row>
            <Col tv={6} desk={6} tablet={6} palm={6} >
              {this.props.personal.name}
            </Col>
            <Col className={style.addressmiddle} tv={6} desk={6} tablet={6} palm={6} >
              {this.props.personal.gender}
            </Col>
          </Row>
          <Row>
            <Col tv={6} desk={6} tablet={6} palm={6} >
              {this.props.personal.date_of_birth}
            </Col>
            <Col className={style.addressmiddle} tv={6} desk={6} tablet={6} palm={6} >
              {age}
            </Col>
          </Row>
          <Row>
            <Col tv={6} desk={6} tablet={6} palm={6} >
              Óbito: {rip}
            </Col>
            <Col className={style.addressmiddle} tv={6} desk={6} tablet={6} palm={6} >
              {this.props.personal.sign}
            </Col>
          </Row>
          <Row>
            <Col tv={12} desk={12} tablet={12} palm={12} >
              Situação na Receita Federal: {this.props.personal.status_federal_revenue}
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
