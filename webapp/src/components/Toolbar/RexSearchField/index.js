import React from 'react'
import IconSearch from 'react-icons/lib/md/search'
import {
  func,
  string,
} from 'prop-types'

import style from './style.css'
import toolItemStyle from '../style.css'

const SearchField = ({
  onChange,
  value,
}) => (
  <div className={toolItemStyle.root}>
    <input
      onChange={e => onChange(e.target.value)}
      value={value}
      className={style.input}
      placeholder="Busca"
      type="search"
    />

    <button className={style.button}>
      <IconSearch />
    </button>
  </div>
)

SearchField.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
}

export default SearchField
