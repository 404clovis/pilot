import React from 'react'
import { Link } from 'react-router-dom'
import IconSearch from 'react-icons/lib/md/search'
import style from './style.css'


class RexSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      data: {},
      errors: {},
      selectValue: 'Key',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    fetch('http://localhost:8000/orders/'.concat(this.state.value))
      .then(response => response.json())
      .then(response => this.setState({ data: response }))
      .catch(errors => this.setState({ errors }))
    alert('A search was submitted: '.concat(this.state.value))
    console.log(this.state.value)
    event.preventDefault()
  }

  handleSelectChange (event) {
    this.setState({ selectValue: event.target.value })
    console.log(this.state.selectValue)
  }

  render () {
    return (
      <div className={style.rexSearch}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <div className={style.search}>
              <select
                className={style.dropdown}
                value={this.state.selectValue}
                onChange={this.handleSelectChange}
              >
                <option value="Key">Chave do Pedido</option>
                <option value="CPF">CPF</option>
              </select>
              <input
                onChange={this.handleChange}
                value={this.state.value}
                className={style.input}
                placeholder="Busca"
                type="search"
              />
              <Link to={'/search/?'.concat(this.state.selectValue).concat('=').concat(this.state.value)}>
                <button className={style.button}>
                  <IconSearch />
                </button>
              </Link>
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default RexSearch
