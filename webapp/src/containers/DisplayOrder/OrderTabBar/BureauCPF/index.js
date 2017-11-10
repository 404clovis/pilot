import React from 'react'

class BureauCPF extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bureau: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://test.bureau.bigbrother.antifraudestone.com.br/procob/document/'.concat(this.props.cpf),
      {
        method: 'GET',
        headers: {
          Authorization: 'c2VudGluZWxhX2FwaV9rZXk=',
        },
      })
      .then(response => response.json())
      .then(response => this.setState({ bureau: response }))
      .catch(errors => this.setState({ errors }))
    console.log('fiz request')
  }

  render () {
    return (
      <div>{JSON.stringify(this.state.bureau)}</div>
    )
  }
}

BureauCPF.propTypes = {
  cpf: React.PropTypes.string.isRequired,
}

export default BureauCPF
