import React from 'react'
import RexFieldSearch from '../../components/Toolbar/RexSearchField'
import style from './style.css'

class RexSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    alert('A search was submitted: '.concat(this.state.value))
    event.preventDefault()
  }

  render () {
    return (
      <div className={style.rexSearch}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <RexFieldSearch
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default RexSearch
