import React from 'react'

import IconMyAccount from 'react-icons/lib/md/face'
import IconDocs from 'react-icons/lib/md/import-contacts'
import IconLetter from 'react-icons/lib/md/assignment'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { TabBar, TabItem } from '../../src/components/TabBar'

const i18n = {
  TabBar: 'TabBar',
  MyAccount: 'Minha Conta',
  Docs: 'Documentação',
  Letter: 'Carta',
  JustText: 'Texto',
  TextIcon: 'Texto e Ícone',
  JustIcon: 'Ícone',
  ThisIs: 'Você está em: '
}

const variantList = [
  { name: i18n.JustText, code: 'just-text' },
  { name: i18n.TextIcon, code: 'text-icon' },
  { name: i18n.JustIcon, code: 'just-icon' },
]

const clicked = action('clicked')

variantList.forEach((variant) => {
  storiesOf(`${i18n.TabBar}`, module)
    .add(variant.name, () => <Tab variant={variant.code} />)
})

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { theChosen: 1 }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (theChosen) {
    this.setState({ theChosen })
  }

  render() {
    return (
      <TabBar
        variant={this.props.variant} 
        index={this.state.theChosen} 
        onTabChange={this.changeTab}
      >
        <TabItem
          icon={<IconMyAccount />}
          text={i18n.MyAccount}
          onClick={clicked}
        >
          <h1>{i18n.ThisIs} {i18n.MyAccount} <IconMyAccount /></h1>
        </TabItem>
        <TabItem
          icon={<IconDocs />}
          text={i18n.Docs}
          onClick={clicked}
        >
          <h2>{i18n.ThisIs} {i18n.Docs} <IconDocs /></h2>
        </TabItem>
        <TabItem
          icon={<IconLetter />}
          text={i18n.Letter}
          onClick={clicked}
        >
          <h3>{i18n.ThisIs} {i18n.Letter} <IconLetter /></h3>
        </TabItem>
      </TabBar>
    )
  }
}