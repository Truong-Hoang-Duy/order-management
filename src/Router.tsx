import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import CustomersFeaturesPage from './pages/CustomersFeaturesPage';
import CustomersPage from './pages/CustomersPage';
import DashboardPage from './pages/DashboardPage';
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
            element: <CustomersPage />,
          },
          {
            path: 'create',
            element: <CustomersFeaturesPage />,
          },
        ],
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
