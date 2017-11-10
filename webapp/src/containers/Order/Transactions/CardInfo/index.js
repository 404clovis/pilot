import React from 'react'
// import MasterCard from 'react-icons/lib/fa/cc-mastercard'

class CardInfo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      card: [],
      loading: true,
      errors: {},
    }
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    fetch(process.env.REACT_APP_DASH_API.concat('/card/222647'), {
      headers: {
        SessionId: sessionId,
      },
    }).then(response => response.json())
      .then(response => this.setState({ card: response }))
  }

  render () {
    if (this.state.card.length > 0) {
      return (
        <div>
          <span>{this.state.card[0].bank} ({this.state.card[0].level})
              - {this.state.card[0].product}
          </span>
        </div>
      )
    }
    return null
  }
}

export default CardInfo
