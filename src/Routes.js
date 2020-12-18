import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Finding as FindingView,
  benefits as benefitsView,
  features as featuresView,
  contact as contactView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        exact
        path="/dashboard"
      />
      <RouteWithLayout
        component={FindingView}
        layout={MainLayout}
        exact
        path="/finding"
      />
      <RouteWithLayout
        component={benefitsView}
        layout={MainLayout}
        exact
        path="/benefits"
      />
      <RouteWithLayout
        component={featuresView}
        layout={MainLayout}
        exact
        path="/features"
      />
      <RouteWithLayout
        component={contactView}
        layout={MainLayout}
        exact
        path="/contact"
      />
    </Switch>
  );
};

export default Routes;
