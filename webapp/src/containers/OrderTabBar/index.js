import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { TabItem, TabBar } from '../../components/TabBar'
import Order from '../Order'

const variantList = [
  { name: 'Order', code: 'just-text' },
]

const clicked = action('clicked')

variantList.forEach((variant) => {
  storiesOf('Order', module)
    .add(variant.name, () => <OrderTabBar variant={variant.code} />)
})

class OrderTabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { theChosen: 0 }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (theChosen) {
    this.setState({ theChosen })
  }

  render () {
    return (
      <TabBar
        index={this.state.theChosen}
        onTabChange={this.changeTab}
      >
        <TabItem
          text={'Dados do Pedido'}
          onClick={clicked}
        >
          <Order request={this.props.match.params.sentinela.toString()} />
        </TabItem>
        <TabItem
          text={'Pesquisa no Bureau'}
          onClick={clicked}
        >
          HI
        </TabItem>
      </TabBar>
    )
  }
}

OrderTabBar.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      sentinela: React.PropTypes.string,
      client: React.PropTypes.string,
    }),
  }),
}

OrderTabBar.defaultProps = {
  match: {
    params: {
      sentinela: null,
      client: null,
    },
  },
}

export default OrderTabBar
