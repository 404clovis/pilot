import React from 'react'
import Button from '../../components/Button'

const Analysis = () => (
  <div>
    <h2>Análise</h2>

    <div className="btn-approve">
      <Button className="btn-decline" color="pink">
        Morde ele, rex!
      </Button>
    </div>

    <div className="btn-decline">
      <Button className="btn-approve" color="blue">
        Aprovar pedido
      </Button>
    </div>

  </div>
)

export default Analysis
