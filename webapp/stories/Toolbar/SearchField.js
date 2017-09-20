import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import SearchField from '../../src/components/Toolbar/SearchField'

class SearchFieldState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }
  render () {
    return (
      <SearchField
        onChange={value => this.setState({ value })}
        value={this.state.value}
        disabled={this.props.disabled}
      />
    )
  }
}

storiesOf('Toolbar', module)
  .add('SearchField', () => (
    <div>
      <div>
        <p>Input de busca</p>

        <SearchFieldState />
      </div>
      <div>
        <p>Input desabilitado</p>

        <SearchFieldState disabled />
      </div>
    </div>
  ))

