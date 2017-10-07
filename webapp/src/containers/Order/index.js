import React from 'react'
import ReactJson from 'react-json-view'
import Customer from './Customer'
import Billing from './Billing'
import Shipping from './Shipping'
import Payment from './Payment'
import Products from './Products'
import Credits from './Credits'
import Seller from './Seller'
import Device from './Device'
import Analysis from '../Analysis'
import { Grid, Row, Col } from '../../components/Grid'


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
    fetch('http://localhost:8000/orders/'.concat(this.props.match.params.sentinela.toString()))
      .then(response => response.json())
      .then(response => this.setState({ orders: response }))
      .catch(errors => this.setState({ errors }))
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
        <div>
          <div className="orders">
            <div className="order-id">
              <h2>Pedido - {source.sentinela_id}</h2>
            </div>
            <Grid>
              <Row>
                <Col tv={9} desk={9} tablet={12} palm={12}>
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
                              title="Fatura"
                            />
                            <CardContent>
                              <Billing billing={billing} />
                            </CardContent>
                          </Card>
                        </div>
                      </Col>
                    }
                    { shipping &&
                    <Col>
                      <div className="order-shipping">
                        <Card>
                          <CardTitle
                            title="Entrega"
                          />
                          <CardContent>
                            <Shipping shipping={shipping} />
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
                          <CardTitle
                            title="Créditos"
                          />
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
                    {!device &&
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
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      sentinela: React.PropTypes.string,
      client: React.PropTypes.string,
    }),
  }),
}

Order.defaultProps = {
  match: {
    params: {
      sentinela: null,
      client: null,
    },
  },
}

export default Order
