import React from 'react'
import ReactJson from 'react-json-view'
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


class Order extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      orders: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/orders/'.concat(this.props.request.toString()))
      .then(response => response.json())
      .then(response => this.setState({ orders: response }))
      .catch(errors => this.setState({ errors }))
    console.log('http://localhost:8000/orders/'.concat(this.props.request))
  }

  render () {
    if (!this.state.orders.source) {
      return false
    }

    const orders = this.state.orders
    const source = orders.source
    const customer = source.customer
    const billing = source.billing
    const shipping = source.shipping
    const payment = source.payment
    const products = source.products
    const credits = source.credits
    const seller = source.seller
    const device = source.device

    return (
      <div>
        <div id="orderID">
          <div className={style.order}>
            <div className="order-id">
              <h5>Pedido - {source.sentinela_id}</h5>
            </div>
            <Grid>
              <Row>
                <Col tv={8} desk={8} tablet={12} palm={12}>
                  <Row>
                    {customer &&
                    <Col>
                      <div className="order-customer">
                        <Card>
                          <CardTitle
                            title="Comprador"
                          />
                          <CardContent>
                            <Customer customer={customer} device={device} />
                          </CardContent>
                        </Card>
                      </div>
                    </Col>
                    }
                    {billing &&
                      <Col>
                        <div className="order-billing">
                          <Card>
                            <CardTitle
                              title="Dados da compra"
                            />
                            <CardContent>
                              <Billing
                                billing={billing || {}}
                                shipping={shipping || {}}
                                customer={customer || {}}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </Col>
                    }
                    {payment &&
                    <Col>
                      <div className="order-payment">
                        <Card>
                          <CardTitle
                            title="Pagamento"
                          />
                          <CardContent>
                            <Payment payment={payment} />
                          </CardContent>
                        </Card>
                      </div>
                    </Col>
                    }
                    {products &&
                    <Col>
                      <div className="order-products">
                        <Card>
                          <CardTitle
                            title="Produtos"
                          />
                          <CardContent>
                            <Products products={products} />
                          </CardContent>
                        </Card>
                      </div>
                    </Col>
                    }
                    {credits &&
                    <Col>
                      <div className="order-credits">
                        <Card>
                          <CardTitle title="Créditos" className={style.cardOrderTitle} />
                          <CardContent>
                            <Credits credits={credits} />
                          </CardContent>
                        </Card>
                      </div>
                    </Col>
                    }
                    {seller &&
                    <Col>
                      <div className="order-seller">
                        <Card>
                          <CardTitle
                            title="Vendedor"
                          />
                          <CardContent>
                            <Seller seller={seller} />
                          </CardContent>
                        </Card>
                      </div>
                    </Col>
                    }
                    {!device && device &&
                    <Col>
                      <div className="order-device">
                        <Card>
                          <CardTitle
                            title="Dispositivos"
                          />
                          <CardContent>
                            <Device device={device} />
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
                      documentNumber={customer.register_id}
                      emailAddress={customer.email}
                    />
                  </div>
                </Col>
              </Row>
            </Grid>
            <Analysis />
            <div className="order-source-json-view">
              <ReactJson src={source} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Order.propTypes = {
  request: React.PropTypes.string.isRequired,
}


export default Order
