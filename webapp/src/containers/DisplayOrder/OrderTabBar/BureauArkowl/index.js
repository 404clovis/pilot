import React from 'react'

const BureauArkowl = props => (
  <div>
    {props.emailJSON}
  </div>
)

BureauArkowl.propTypes = {
  emailJSON: React.PropTypes.string.isRequired,
}

export default BureauArkowl
