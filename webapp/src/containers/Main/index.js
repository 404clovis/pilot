import React from 'react'
import { NavLink } from 'react-router-dom'
import RexSearch from '../../containers/Search'
import { Grid, Row, Col } from '../../components/Grid'
import logo from '../../logos/Rexlab/rex_logo_bw.svg'
import style from './style.css'


const Main = () => (
  <div className={style.menu}>
    <Grid>
      <Row>
        <Col desk={4} tv={4} tablet={9} palm={9}>
          <main>
            <div className={style.logo}>
              <a href="/clients">
                <img src={logo} className="Rexlab-logo" alt="RexLab Logotipo" />
              </a>
            </div>
          </main>
        </Col>
        <Col desk={4} tv={4} tablet={9} palm={9}>
          <RexSearch />
        </Col>
        <Col desk={3} tv={3} tablet={3} palm={3}>
          <div className={style.navigation}>
            <ul>
              <li>
                <h4 className={style.menuItem}>
                  <NavLink to="/clients">Clientes</NavLink>
                </h4>
              </li>
              <li>
                <h4 className={style.menuItem}>
                  <NavLink to="/orders">Pedidos</NavLink>
                </h4>
              </li>
              <li>
                <h4 className={style.menuItem}>
                  <NavLink to="/queues" replace>Filas</NavLink>
                </h4>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Main
