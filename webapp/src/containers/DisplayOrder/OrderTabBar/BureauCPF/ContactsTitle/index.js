import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'


class ContactsTitle extends React.Component {
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
        {this.props.person_contacts[0] &&
        <Grid>
          <Row>
            <Col tv={3} desk={3} tablet={12} palm={12}>
              <div className={style.familyTitle}>CPF</div>
            </Col>
            <Col tv={4} desk={4} tablet={12} palm={12}>
              <div className={style.familyTitle}>NOME</div>
            </Col>
            <Col tv={5} desk={5} tablet={12} palm={12}>
              <div className={style.familyTitle}>ENDEREÇO</div>
            </Col>
          </Row>
        </Grid>
        }
      </div>
    )
  }
}

ContactsTitle.propTypes = {
  person_contacts: PropTypes.shape({
    city: PropTypes.string,
    document_number: PropTypes.string,
    name: PropTypes.string,
    neighborhood: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    zip_code: PropTypes.string,
  }),
}

ContactsTitle.defaultProps = {
  person_contacts: {
    name: null,
  },
}

export default ContactsTitle
