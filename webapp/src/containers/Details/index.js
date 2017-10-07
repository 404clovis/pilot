import React from 'react'

class Details extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      historical: {},
    }
  }

  componentDidMount () {
    this.state.historical = this.props.historical
  }

  render () {
    if (!this.state.historical) {
      return false
    }

    const historical = this.state.historical

    return (
      <div>
        { historical }
      </div>
    )
  }
}

Details.propTypes = {
  historical: React.PropTypes.shape(),
}

Details.defaultProps = {
  historical: null,
}

export default Details
