import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './hoc/navigation/navigation';
import HomePage from './pages/HomePage';
import AuthPage from './pages/auth/AuthPage';
import NotExistPage from './pages/NotExistPage';
import BrandsPage from './pages/BrandsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import UserPage from './pages/UserPage';
import CategoryFilterPage from './pages/CategoryFilterPage';
import HelpPage from './pages/HelpPage';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  renderContent = () => {
    const { isAuthenticated } = this.props;
    console.log('isAuthenticated', isAuthenticated);

    const authRoutes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/me" component={UserPage} />
        <Route exact path="/home/:brandId" component={HomePage} />
        <Route exact path="/brands" component={BrandsPage} />
        <Route exact path="/help" component={HelpPage} />
        <Route path="/product-details/:productId" component={ProductDetailsPage} />
        <Route exact path="/products/category/:categoryId" component={CategoryFilterPage} />
        <Route path="*" component={NotExistPage} />
      </Switch>
    );

    const unAuthRoutes = (
      <Switch>
        <Route exact path="/" component={() => <AuthPage formType="login" />} />
        <Route exact path="/login" component={() => <AuthPage formType="login" />} />
        <Route exact path="/signup" component={() => <AuthPage formType="signup" />} />
        <Route exact path="/forgot" component={() => <AuthPage formType="forgot" />} />
        <Route path="*" component={NotExistPage} />
      </Switch>
    );

    return isAuthenticated ? (
      <>
        <Navigation />
        <main className="main">{authRoutes}</main>
      </>
    ) : (
      <main>{unAuthRoutes}</main>
    );
  };

  render() {
    return this.renderContent();
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
