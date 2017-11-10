import React from 'react'
import FaUserSecret from 'react-icons/lib/fa/user-secret'
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
              placeholder="Escreva o Rexumo aqui..."
              rows={10}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Summary
