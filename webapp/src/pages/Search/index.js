import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ResultList from '../../containers/Search/ResultList'

const Search = props => (
  <div>
    <h6>busca</h6>
    <Switch>
      <Route exact path={`${props.match.url}/:data`} component={ResultList} />
    </Switch>
  </div>
)

Search.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
}

Search.defaultProps = {
  match: {
    url: null,
  },
}

export default Search
