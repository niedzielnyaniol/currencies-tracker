import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppPage from '../containers/AppPage';

import * as currencyActions from '../actions/currencyActions';

const App = (props) => (
  <AppPage {...props} />
);

const mapStateToProps = (state) => ({
  ...state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(currencyActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
