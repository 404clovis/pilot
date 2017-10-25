import React from 'react'
import { Link } from 'react-router-dom'
import IconSearch from 'react-icons/lib/md/search'
import style from './style.css'
import toolItemStyle from '../../components/Toolbar/style.css'


class RexSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
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
            <div className={toolItemStyle.root}>
              <input
                onChange={this.handleChange}
                value={this.state.value}
                className={style.input}
                placeholder="Busca"
                type="search"
              />
              <Link to={'/search'} className={style.button}>
                <IconSearch />
              </Link>
            </div>
          </label>
        </form>
      </div>
    )
  }
}


export default RexSearch
