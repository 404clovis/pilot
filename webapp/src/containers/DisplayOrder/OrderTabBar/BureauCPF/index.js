import React from 'react'

const BureauCPF = props => (
  <div>
    {props.cpfJSON}
  </div>
)

BureauCPF.propTypes = {
  cpfJSON: React.PropTypes.string.isRequired,
}

export default BureauCPF
