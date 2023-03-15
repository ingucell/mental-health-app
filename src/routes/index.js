import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignInContainer from '../containers/App/SignInContainer';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from '../pages/Login';


const Routes = () => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.SIGN_IN} component={SignInContainer} />
    </Switch>
  );
};

export default Routes;
