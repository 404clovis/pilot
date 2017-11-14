import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'


class Family extends React.Component {
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
            {this.props.family.document_number &&
            <Col tv={1} desk={1} tablet={1} palm={2}>
              {this.props.family.document_number}
            </Col>
            }
            {this.props.family.name &&
            <Col tv={2} desk={2} tablet={2} palm={4}>
              {this.props.family.name}
            </Col>
            }
            {this.props.family.retired &&
            <Col tv={1} desk={1} tablet={1} palm={2}>
              {this.props.family.retired}
            </Col>
            }
            {this.props.family.rip &&
            <Col tv={1} desk={1} tablet={1} palm={2}>
              {this.props.family.rip}
            </Col>
            }
            {this.props.family.type &&
            <Col tv={1} desk={1} tablet={1} palm={2}>
              {this.props.family.type}
            </Col>
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

Family.propTypes = {
  family: PropTypes.shape({
    document_number: PropTypes.string,
    name: PropTypes.string,
    retired: PropTypes.string,
    rip: PropTypes.bool,
    type: PropTypes.string,
    type_benefits: PropTypes.string,
  }),
}

Family.defaultProps = {
  family: {
    name: null,
  },
}

export default Family
