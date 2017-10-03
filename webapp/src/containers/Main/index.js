import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../components/Grid'

import logo from '../../logos/Rexlab/rex_logo_bw.svg'
import './style.css'


const Main = () => (
  <Grid>
    <Row>
      <Col desk={3} tv={3} tablet={4} palm={4}>
        <main>
          <Col desk={1} >
            <img src={logo} className="Rexlab-logo" alt="RexLab Logotipo" />
          </Col>
          <h1>Bem-vindo ao Rex!</h1>
          <h2>Inteligência contra fraudes</h2>
        </main>
      </Col>
      <Col desk={9} tv={9} tablet={8} palm={8}>
        <div className="navigation">
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
