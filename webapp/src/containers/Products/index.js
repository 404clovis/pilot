import React from 'react'
import PropTypes from 'prop-types'


const Products = props => (
  <div className="products">
    {
      props.products.map(product => (
        <div className="product">
          <p>{product.product_code}</p>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.sku}</p>
          <p>{product.quantity}</p>
          <p>{product.unit_cost}</p>
        </div>
      ))
    }
  </div>
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

export default Products
