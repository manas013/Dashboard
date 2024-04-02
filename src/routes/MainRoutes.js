import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const History = Loadable(lazy(() => import('pages/extra-pages/History')));

// render - utilities
const Wallet = Loadable(lazy(() => import('pages/components-overview/Wallet')));
 const Assets = Loadable(lazy(() => import('pages/components-overview/Assets')));
const Trade = Loadable(lazy(() => import('pages/components-overview/Trade')));
const Organization = Loadable(lazy(() => import('pages/components-overview/Organization')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/organization',
      element: <Organization />
    },
    {
      path: 'home',
      element: <DashboardDefault />
    },
    {
      path: 'assets',
      element: <Assets />
    },
    {
      path: 'trade',
      element: <Trade />
    },
    {
      path: 'history',
      element: <History />
    },
    {
      path: 'wallet',
      element: <Wallet />
    },
  ]
};

export default MainRoutes;
