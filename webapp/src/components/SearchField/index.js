import React from 'react'
import IconSearch from 'react-icons/lib/md/search'
import {
  func,
  string,
  bool,
} from 'prop-types'

import style from './style.css'

const SearchField = ({
  disabled,
  onChange,
  value,
}) => (
  <div className={style.root}>
    <input
      disabled={disabled}
      onChange={e => !disabled && onChange(e.target.value)}
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
  disabled: bool,
}

SearchField.defaultProps = {
  disabled: false,
}

export default SearchField
