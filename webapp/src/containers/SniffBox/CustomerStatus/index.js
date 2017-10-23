import React from 'react'
import CircularProgress from '../../../components/CircularProgress'
import style from '../style.css'
import { Grid, Row, Col } from '../../../components/Grid'

const CustomerStatus = () => (
  <Grid>
    <Row>
      <Col v={6} desk={6} tablet={12} palm={12}>
        <div className={style.clientParams}>
          <CircularProgress percent={62} label={'Conversão hoje'} />
        </div>
      </Col>
      <Col v={6} desk={6} tablet={12} palm={12}>
        <div className={style.clientParams}>
          <CircularProgress percent={85} label={'SLA abaixo de 5 hrs'} />
        </div>
      </Col>
    </Row>
  </Grid>
)

export default CustomerStatus
