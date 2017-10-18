import React from 'react'
import PropTypes from 'prop-types'
import Address from '../Address'
import style from '../style.css'


const Seller = props => (
  <div className={style.seller}>
    {props.seller.seller_id && <span>Identificador: {props.seller.seller_id}</span>}
    {props.seller.name && <span>Nome: {props.seller.name}</span>}
    {props.seller.document_number && <span>Documento: {props.seller.document_number}</span>}
    {props.seller.address && <Address address={props.seller.address} />}
    {props.seller.created_at && <span>Criado em: {props.seller.created_at}</span>}
  </div>
)

Seller.propTypes = {
  seller: PropTypes.shape({
    seller_id: PropTypes.string,
    name: PropTypes.string,
    document_number: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      complement: PropTypes.string,
      country: PropTypes.string,
      neighborhood: PropTypes.string,
      number: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
      zip_code: PropTypes.string,
    }),
    created_at: PropTypes.string,
  }),
}

Seller.defaultProps = {
  seller: null,
}

export default Seller
