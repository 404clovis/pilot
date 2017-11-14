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
            <Col tv={1} desk={1} tablet={2} palm={4} >

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Personal.propTypes = {
  Personal: PropTypes.shape({
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
  Personal: {
    name: null,
  },
}

export default Personal
