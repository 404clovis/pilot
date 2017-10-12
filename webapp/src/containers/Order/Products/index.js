import React from 'react'
import PropTypes from 'prop-types'
import ReactScrollbar from 'react-scrollbar-js'
import style from './../style.css'

const CentsToDollar = value => (
  <span className="currency">
    {(Number(value) / 100).toFixed(2).replace('.', ',')}
  </span>
)

const DescriptionCard = props => (
  <div className={style.descriptionCard}>
    {props.productCode && <span className={style.descriptionCardElement}>
      Código produto: {props.productCode}
    </span>}
    <span className={style.descriptionCardElement}>
      Descrição: {props.description}
    </span>
  </div>
)

const SizeScrollbar = { height: 160, width: 400 }

const Products = props => (
  <ReactScrollbar style={SizeScrollbar}>
    <div className={style.products}>
      {
        props.products.map(product => (
          <div className={style.products}>
            <span>
              ({product.quantity} x {CentsToDollar(product.unit_cost)}) {product.name}
            </span>
            <DescriptionCard
              productCode={product.productCode}
              description={product.description}
            />
          </div>
        ))
      }
    </div>
  </ReactScrollbar>
)

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product_code: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      sku: PropTypes.string,
      quantity: PropTypes.string,
      unit_cost: PropTypes.string,
    })
  ),
}

Products.defaultProps = {
  products: null,
}

DescriptionCard.propTypes = {
  productCode: PropTypes.string,
  description: PropTypes.string,
}

DescriptionCard.defaultProps = {
  productCode: null,
  description: null,
}

export default Products
