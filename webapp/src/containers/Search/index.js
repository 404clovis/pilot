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
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }


  handleSelectChange (event) {
    this.setState({ selectValue: event.target.value })
  }

  render () {
    return (
      <div className={style.rexSearch}>
        <form>
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
              <button className={style.button}>
                <Link to={'/search/'.concat(this.state.selectValue).concat('=').concat(this.state.value)}>
                  <IconSearch />
                </Link>
              </button>
            </div>
          </label>
        </form>
      </div>
    )
  }
}

export default RexSearch
