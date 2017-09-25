import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'


class Partner extends React.Component {
  constructor (props) {
    super(props)
    this.state = { email: '', name: '' }
  }

  onChange (field, value) {
    this.setState({ [field]: value })
  }

  // Quando eu montei o compnent eu uso este metodo p fazer chamadas http
  // Life cycle compnents react
  componentDidMount(){
    fetch('google.com/asuhasuhas')
      .then(
        result => this.setState()
      )
  }

  render () {
    return (
      <div className={'form-partner'}>
        <h5>Enviar partner</h5>
        <Input
          name="name"
          label="Digite seu nome"
          type={'text'}
          placeholder="Joao da Silva"
          value={this.state.name}
          onChange={this.onChange.bind(this, 'name')}
        />
        <Input
          name="email"
          label="Digite seu email"
          type={'text'}
          placeholder="nome@email.com"
          value={this.state.email}
          onChange={this.onChange.bind(this, 'email')}
        />
        <Button>Enviar</Button>
      </div>
    )
  }
}

export default Partner
