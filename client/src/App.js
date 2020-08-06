import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './hoc/navigation/navigation';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NotExistPage from './pages/NotExistPage';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    const { isAuthenticated } = this.props;

    let routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/auth" component={AuthPage} />
        <Route path="*" component={NotExistPage} />
      </Switch>
    );

    return (
      <>
        <Navigation />
        <main>
          <section>{routes}</section>
        </main>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
