import React from 'react'
import style from '../style.css'
import OrderFinalization from '../OrderFinalization'
import CustomerStatus from '../CustomerStatus'
import Summary from '../../Summary'

const Finalization = () => (
  <div className={style.finalizationMargin}>
    <Summary />
    <OrderFinalization />
    <CustomerStatus />
  </div>
)

export default Finalization
