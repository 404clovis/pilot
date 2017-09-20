import React from 'react'

import { storiesOf } from '@storybook/react'
import { range } from 'ramda'

import { Grid, Row, Col } from '../../src/components/Grid'
import CardSample from './CardSample'

import '../../src/styles/index.css'
import style from './style.css'

const maxColumns = 12

storiesOf('Grid', module)
  .add('Flexible', () => (
    <div className={style.background}>
      <Grid>
        <Row flex>
          <Col tv={6} desk={8} tablet={10} palm={12}>
            <CardSample>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </CardSample>
          </Col>
          <Col>
            <CardSample />
          </Col>
        </Row>
        <Row flex>
          <Col>
            <CardSample>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </CardSample>
          </Col>
          <Col>
            <CardSample />
          </Col>
        </Row>
        <Row flex>
          <Col>
            <CardSample>
              Loremipsumdolorsitamet,consetetursadipscingelitr,seddiamnonumyeirmodtemporinviduntutlaboreetdolorem,seddiamvoluptua.Atveroeosetaccusametjustoduodoloresetearebum.
            </CardSample>
          </Col>
          <Col>
            <CardSample />
          </Col>
        </Row>
      </Grid>
    </div>
  ))
