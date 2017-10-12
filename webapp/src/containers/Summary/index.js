import React from 'react'
import FaUserSecret from 'react-icons/lib/fa/user-secret'
import Button from '../../components/Button'
import style from './style.css'

class Summary extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      updateStatus: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    fetch('https://api.rexlab.com.br:8000/orders/192718271-867588837232-784121212')
      .then(response => response.json())
      .then(response => this.setState({ updateStatus: response }))
      .catch(errors => this.setState({ errors }))
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div>
          <h4><span><FaUserSecret /></span> Rexumo</h4>
        </div>
        <div className={style.summary}>
          <form onSubmit={this.handleSubmit}>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              className={style.result}
              placeholder="Escreva o resumo aqui..."
              rows={10}
            />
            <div className={style.finalization}>
              <Button className={style.btnApprove} size="tiny" color="blue">
                Converte
              </Button>
              <Button className={style.btnDecline} size="tiny" color="pink">
                Morde, Rex!
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Summary
