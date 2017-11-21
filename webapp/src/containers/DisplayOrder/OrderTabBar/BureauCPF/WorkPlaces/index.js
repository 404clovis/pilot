import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'

class WorkPlace extends React.Component {
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
            <Col tv={2} desk={2} tablet={12} palm={12} >
              {this.props.work_places.document_number}
            </Col>
            <Col tv={4} desk={4} tablet={12} palm={12} >
              {this.props.work_places.name}
            </Col>
            <Col tv={6} desk={6} tablet={12} palm={12} >
              {this.props.work_places.street} {this.props.work_places.number}
              {this.props.work_places.neighborhood} {this.props.work_places.city}
              {this.props.work_places.state} {this.props.work_places.zip_code}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

WorkPlace.propTypes = {
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

WorkPlace.defaultProps = {
  work_places: {
    name: null,
  },
}

export default WorkPlace
