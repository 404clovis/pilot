/* eslint react/prop-types: 0 */
import React from 'react'
import ReactLoading from 'react-loading'
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
      historicalEmail: [],
      errors: {},
      loading: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/history/document/'.concat(this.props.documentNumber))
      .then(response => response.json())
      .then(response => this.setState({ historical: response, loading: false }))
      .catch(errors => this.setState({ errors }))

    fetch('http://localhost:8000/history/email/'.concat(this.props.emailAddress))
      .then(response => response.json())
      .then(response => this.setState({ historicalEmail: response, loading: false }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    const SizeScrollbar = {
      height: 250,
    }

    if (this.state.loading) {
      return (
        <div className={style.details}>
          <h4>Faro do Rex</h4>
          <ReactScrollbar style={SizeScrollbar}>
            <div className={style.loading}>
              <ReactLoading type="spin" color="#888" height="30" width="30" />
            </div>
          </ReactScrollbar>
        </div>
      )
    }

    return (
      <div>
        <div className={style.details}>
          <h4>Faro do Rex</h4>
          <ReactScrollbar style={SizeScrollbar}>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>
                      <span>Farejei documento</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>
                      <span>Farejei email</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.historicalEmail.map(hist => (
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
                </tbody>
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
  emailAddress: PropTypes.string,
}

Details.defaultProps = {
  emailAddress: null,
  documentNumber: null,
}

export default Details
