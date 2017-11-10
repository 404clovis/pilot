import React from 'react'
import Customer from './Customer'
import Billing from './Billing'
import Payment from './Payment'
import Products from './Products'
import Credits from './Credits'
import Seller from './Seller'
import Device from './Device'
import Analysis from '../Analysis'
import SniffBox from '../SniffBox'
import { Grid, Row, Col } from '../../components/Grid'
import style from '../style.css'

import {
  Card,
  CardTitle,
  CardContent,
} from '../../components/Card'

const Order = props => (
  <div>
    <div id="orderID">
      <div className={style.order}>
        <div className="order-id">
          <h5>Pedido - {props.request.sentinela_id}</h5>
        </div>
        <Grid>
          <Row>
            <Col tv={8} desk={8} tablet={12} palm={12}>
              <Row>
                {props.request.customer &&
                <Col>
                  <div className="order-customer">
                    <Card>
                      <CardTitle
                        title="Comprador"
                      />
                      <CardContent>
                        <Customer customer={props.request.customer} device={props.request.device} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {props.request.billing &&
                <Col>
                  <div className="order-billing">
                    <Card>
                      <CardTitle
                        title="Dados da compra"
                      />
                      <CardContent>
                        <Billing
                          billing={props.request.billing || {}}
                          shipping={props.request.shipping || {}}
                          customer={props.request.customer || {}}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {props.request.payment &&
                <Col>
                  <div className="order-payment">
                    <Card>
                      <CardTitle
                        title="Pagamento"
                      />
                      <CardContent>
                        <Payment payment={props.request.payment} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {props.request.products &&
                <Col>
                  <div className="order-products">
                    <Card>
                      <CardTitle
                        title="Produtos"
                      />
                      <CardContent>
                        <Products products={props.request.products} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {props.request.credits &&
                <Col>
                  <div className="order-credits">
                    <Card>
                      <CardTitle title="Créditos" className={style.cardOrderTitle} />
                      <CardContent>
                        <Credits credits={props.request.credits} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {props.request.seller &&
                <Col>
                  <div className="order-seller">
                    <Card>
                      <CardTitle
                        title="Vendedor"
                      />
                      <CardContent>
                        <Seller seller={props.request.seller} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
                {!props.request.device && props.request.device &&
                <Col>
                  <div className="order-device">
                    <Card>
                      <CardTitle
                        title="Dispositivos"
                      />
                      <CardContent>
                        <Device device={props.request.device} />
                      </CardContent>
                    </Card>
                  </div>
                </Col>
                }
              </Row>
            </Col>
            <Col tv={4} desk={4} tablet={12} palm={12}>
              <div className={style.detailsTitle}>
                <SniffBox
                  documentNumber={props.request.customer.register_id}
                  emailAddress={props.request.customer.email}
                />
              </div>
            </Col>
          </Row>
        </Grid>
        <Analysis />
      </div>
    </div>
  </div>
)

Order.propTypes = {
  request: React.PropTypes.string.isRequired,
}


export default Order
