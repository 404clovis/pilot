import React from 'react'

const BureauCPF = props => (
  <div>
    {props.cpf}
  </div>
)

BureauCPF.propTypes = {
  cpf: React.PropTypes.string.isRequired,
}

export default BureauCPF
