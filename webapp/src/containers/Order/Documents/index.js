import React from 'react'
import PropTypes from 'prop-types'


const Documents = props => (
  <div className="documents">
    {
      props.documents.map(document => (
        <div className="documents">
          <span>{document.document_type}</span>
          <span>{document.number}</span>
        </div>
      ))
    }
  </div>
)

Documents.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      document_type: PropTypes.string,
    })
  ),
}

Documents.defaultProps = {
  documents: [],
}


export default Documents
