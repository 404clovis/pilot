import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'


class FamilyTitle extends React.Component {
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
        {this.props.family[0] &&
        <Grid>
          <Row>
            {this.props.family[0].document_number &&
            <Col tv={1} desk={1} tablet={2} palm={4}>
              <div className={style.familyTitle}>CPF</div>
            </Col>
            }
            {this.props.family[0].name &&
            <Col tv={2} desk={2} tablet={2} palm={4}>
              <div className={style.familyTitle}>NOME</div>
            </Col>
            }
            {this.props.family[0].retired &&
            <Col tv={1} desk={1} tablet={2} palm={4}>
              <div className={style.familyTitle}>APOSENTADO</div>
            </Col>
            }
            {this.props.family[0].rip &&
            <Col tv={1} desk={1} tablet={2} palm={4}>
              <div className={style.familyTitle}>ÓBITO</div>
            </Col>
            }
            {this.props.family[0].type &&
            <Col tv={1} desk={1} tablet={2} palm={4}>
              <div className={style.familyTitle}>PARENTESCO</div>
            </Col>
            }
          </Row>
        </Grid>
        }
      </div>
    )
  }
}

FamilyTitle.propTypes = {
  family: PropTypes.arrayOf(
    PropTypes.shape({
      document_number: PropTypes.string,
      name: PropTypes.string,
      retired: PropTypes.string,
      rip: PropTypes.bool,
      type: PropTypes.string,
      type_benefits: PropTypes.string,
    })
  ),
}

FamilyTitle.defaultProps = {
  family: {
    name: null,
  },
}

export default FamilyTitle
