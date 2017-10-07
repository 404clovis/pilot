const PaymentTypeConverter = {
  credit: 'Crédito',
  debit: 'Débito',
  voucher: 'Voucher',
  vr: 'Vale refeição',
  sodexo: 'Sodexo',
  boleto: 'Boleto' }

const PaymentType = input => PaymentTypeConverter[input]

export default PaymentType
