import React from 'react'
import PropTypes from 'prop-types'


const Documents = props => (
  <span className="documents">
    {
      props.documents.map(document => (
        <div>
          <span>{document.document_type}: {document.number}</span>
        </div>
      ))
    }
  </span>
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
