import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';
import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  const showModal = () => setIsVisible(true);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setIsVisible(false)}
      />
    </Layout>
  );
};

export default Dashboard;
