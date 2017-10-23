import React from 'react'
import style from '../style.css'
import OrderFinalization from '../OrderFinalization'
import Summary from '../../Summary'

const Finalization = () => (
  <div className={style.finalizationMargin}>
    <Summary />
    <OrderFinalization />
  </div>
)

export default Finalization
