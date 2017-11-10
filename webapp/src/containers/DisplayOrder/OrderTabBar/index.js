import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { TabItem, TabBar } from '../../../components/TabBar/index'
import Order from '../../Order/index'
import BureauCPF from './BureauCPF'
import BureauArkowl from './BureauArkowl'
import Button from '../../../components/Button'

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
    this.state = {
      theChosen: 0,
      procob: {},
      arkowl: {},
    }
    this.changeTab = this.changeTab.bind(this)
    this.handleProcob = this.handleProcob.bind(this)
    this.handleArkowl = this.handleArkowl.bind(this)
  }

  changeTab (theChosen) {
    this.setState({ theChosen })
  }

  handleProcob () {
    let cpf = ''
    const documents = this.props.source.customer.documents
    console.log(documents)

    for (let i = 0; i < documents.length; i += 1) {
      if (documents[i].document_type === 'CPF') {
        cpf = documents[i].number
      }
    }

    fetch('http://test.bureau.bigbrother.antifraudestone.com.br/procob/document/'.concat(cpf),
      {
        method: 'GET',
        headers: {
          Authorization: 'c2VudGluZWxhX2FwaV9rZXk=',
        },
      })
      .then(response => response.json())
      .then(response => this.setState({ procob: response }))
      .catch(errors => this.setState({ errors }))
    console.log('http://test.bureau.bigbrother.antifraudestone.com.br/procob/document/'.concat(cpf))
    console.log('fiz request no botão!')
  }

  handleArkowl () {
    const email = this.props.source.customer.email
    console.log(email)

    fetch('http://test.bureau.bigbrother.antifraudestone.com.br/arkowl/email/'.concat(email),
      {
        method: 'GET',
        headers: {
          Authorization: 'c2VudGluZWxhX2FwaV9rZXk=',
        },
      })
      .then(response => response.json())
      .then(response => this.setState({ arkowl: response }))
      .catch(errors => this.setState({ errors }))
    console.log('http://test.bureau.bigbrother.antifraudestone.com.br/arkowl/email/'.concat(email))
    console.log('fiz request no botão!')
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
          <br />
          <Button onClick={this.handleProcob}>Procurar Procob</Button>
          <Button onClick={this.handleArkowl}>Procurar Arkowl</Button>
          <Order request={this.props.source} />
        </TabItem>
        <TabItem
          text={'Procob'}
          onClick={clicked}
        >
          <BureauCPF cpfJSON={JSON.stringify(this.state.procob)} />
        </TabItem>
        <TabItem
          text={'Arkowl'}
          onClick={clicked}
        >
          <BureauArkowl emailJSON={JSON.stringify(this.state.arkowl)} />
        </TabItem>
      </TabBar>
    )
  }
}

OrderTabBar.propTypes = {
  source: React.PropTypes.string.isRequired,
}

export default OrderTabBar
