import React from 'react'
import style from '../style.css'

class FinalizationText extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      updateStatus: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <div>
        <div>
          <h4>Rexumo</h4>
        </div>
        <div>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className={style.result}
            placeholder="Escreva o resumo aqui..."
            rows={10}
          />
        </div>
      </div>
    )
  }
}

export default FinalizationText
