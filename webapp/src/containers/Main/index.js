import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../components/Grid'


const Main = () => (
  <Grid>
    <Row>
      <Col desk={3} tv={3} tablet={4} palm={4}>
        <main>
          <h1>Bem-vindo ao Rex!</h1>
          <h2>Inteligência contra fraudes</h2>
          <ul>
            <li><NavLink to="/clients">Clientes</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
            <li><NavLink to="/queues" replace>Filas</NavLink></li>
          </ul>
        </main>
      </Col>
    </Row>
  </Grid>
)

export default Main
