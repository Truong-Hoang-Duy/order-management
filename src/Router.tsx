import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import CustomersFeaturesPage from './pages/CustomersFeaturesPage';
import CustomersViewPage from './pages/CustomersViewPage';
import DashboardPage from './pages/DashboardPage';
import EmployeeFeaturesPage from './pages/EmployeeFeaturesPage';
import EmployeeViewPage from './pages/EmployeeViewPage';
import OrdersFeaturesPage from './pages/OrdersFeaturesPage';
import OrdersViewPage from './pages/OrdersViewPage';
import { Chart } from './shared/components/Chart';
import NotFound from './shared/components/NotFound';
import { Sidebar } from './shared/components/Sidebar/';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'customers',
        children: [
          {
            index: true,
            element: <CustomersViewPage />,
          },
          {
            path: 'create',
            element: <CustomersFeaturesPage />,
          },
          {
            path: 'edit/:id',
            element: <CustomersFeaturesPage />,
          },
        ],
      },

      {
        path: 'orders',
        children: [
          {
            index: true,
            element: <OrdersViewPage />,
          },
          {
            path: 'create',
            element: <OrdersFeaturesPage />,
          },
          {
            path: 'edit/:id',
            element: <OrdersFeaturesPage />,
          },
        ],
      },

      {
        path: 'employee',
        children: [
          {
            index: true,
            element: <EmployeeViewPage />,
          },
          {
            path: 'create',
            element: <EmployeeFeaturesPage />,
          },
          {
            path: 'edit/:id',
            element: <EmployeeFeaturesPage />,
          },
        ],
      },

      {
        path: 'chart',
        element: <Chart />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
