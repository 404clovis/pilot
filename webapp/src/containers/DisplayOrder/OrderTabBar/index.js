import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { TabItem, TabBar } from '../../../components/TabBar/index'
import Order from '../../Order/index'
import BureauCPF from './BureauCPF'

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
    let cpf = ''
    const documents = this.props.source.customer.documents
    console.log(documents)
    const email = this.props.source.customer.email
    console.log(email)

    for (let i = 0; i < documents.length; i += 1) {
      if (documents[i].document_type === 'CPF') {
        cpf = documents[i].number
      }
    }

    return (
      <TabBar
        index={this.state.theChosen}
        onTabChange={this.changeTab}
      >
        <TabItem
          text={'Dados do Pedido'}
          onClick={clicked}
        >
          <Order request={this.props.source} />
        </TabItem>
        <TabItem
          text={'Pesquisa no Bureau'}
          onClick={clicked}
        >
          <BureauCPF cpf={cpf} />
        </TabItem>
      </TabBar>
    )
  }
}

OrderTabBar.propTypes = {
  source: React.PropTypes.string.isRequired,
}

export default OrderTabBar
