/* eslint react/prop-types: 0 */
import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/pt-br'
import PropTypes from 'prop-types'
import ReactScrollbar from 'react-scrollbar-js'
import style from '../style.css'
import clearsale from '../../icons/clearsale.svg'
import rexlab from '../../icons/rexlab.svg'
import konduto from '../../icons/konduto.svg'
import Summary from '../Summary'


const AntifraudServiceIcon = (name) => {
  if (name === 'konduto') {
    return (
      <img src={konduto} className="rexlabIcon" alt="Konduto Icon Logotipo" />
    )
  } else if (name === 'clearsale') {
    return (
      <img src={clearsale} className="clearsaleIcon" alt="Clearsale Icon Logotipo" />
    )
  }

  return <img src={rexlab} className="rexlabIcon" alt="Rexlab Icon Logotipo" />
}

const AntifraudStatusConverter = { auto_approved: 'APA', auto_declined: 'RPA', pending_analysis: 'AMA' }

const AntifraudStatus = input => AntifraudStatusConverter[input]

const CentsToDollar = value => (
  <span className="currency">
    {(Number(value) / 100).toFixed(2).replace('.', ',')}
  </span>
)

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      historical: [],
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/history/'.concat(this.props.documentNumber))
      .then(response => response.json())
      .then(response => this.setState({ historical: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.historical) {
      return null
    }

    const SizeScrollbar = {
      height: 250,
    }

    return (
      <div>
        <div className={style.details}>
          <h4>Faro do Rex</h4>
          <ReactScrollbar style={SizeScrollbar}>
            <div>
              <table>
                { this.state.historical.map(hist => (
                  <tr>
                    <div>
                      <td>
                        <span className={style.detailsService}>
                          {AntifraudServiceIcon(hist.antifraud_status.service)}
                        </span>
                      </td>
                      <td>
                        <span className={style.transactionStatus}>
                          {AntifraudStatus(hist.antifraud_status.status)}
                        </span>
                      </td>
                      <td>
                        <Moment element="span" format="DD/MM/YY HH:mm">
                          {hist.transaction_date}
                        </Moment>
                      </td>
                      <td>
                        <span>{hist.customer_name.toUpperCase()}</span>
                      </td>
                      <td>
                        <span>{hist.customer_email}</span>
                      </td>
                      <td>
                        <span>{CentsToDollar(hist.total_amount)}</span>
                      </td>
                    </div>
                  </tr>
                ))}
              </table>
            </div>
          </ReactScrollbar>
        </div>
        <Summary />
      </div>
    )
  }
}

Details.propTypes = {
  documentNumber: PropTypes.string.isRequired,
}

export default Details
