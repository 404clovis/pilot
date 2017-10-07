import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../components/Grid'

import logo from '../../logos/Rexlab/rex_logo_bw.svg'
import style from './style.css'


const Main = () => (
  <Grid>
    <Row>
      <Col desk={9} tv={9} tablet={9} palm={9}>
        <main>
          <div className={style.logo}>
            <img src={logo} className="Rexlab-logo" alt="RexLab Logotipo" />
          </div>
        </main>
      </Col>
      <Col desk={3} tv={3} tablet={3} palm={3}>
        <div className={style.navigation}>
          <ul>
            <li><NavLink to="/clients">Clientes</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/queues" replace>Filas</NavLink></li>
          </ul>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Main
