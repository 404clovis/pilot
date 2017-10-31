import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import IconSearch from 'react-icons/lib/md/search'
import style from './style.css'


class RexSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      data: {},
      errors: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render () {
    const options = [
      {
        name: 'Chave do pedido',
        value: 'Chave do Pedido',
      },
      {
        name: 'CPF',
        value: 'CPF',
      },
    ]

    return (
      <div className={style.rexSearch}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">
            <div className={style.search}>
              <Dropdown
                className={style.dropdown}
                options={options}
                placeholder="Escolha o filtro"
              />
              <input
                onChange={this.handleChange}
                value={this.state.value}
                className={style.input}
                placeholder="Busca"
                type="search"
              />
              <Link to={'/search/query='.concat(this.state.value)}>
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
