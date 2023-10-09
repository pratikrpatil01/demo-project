import { Suspense, lazy, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet, RouteObject, useNavigate } from 'react-router';

import SidebarLayout, { checkAuthLoader } from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from './content/pages/Login';
import Forgotpassword from './content/pages/Forgotpassword';
import Resetpassword from './content/pages/Resetpassword';
import AddUser from './content/applications/Master/addUser';
import EditUser from './content/applications/Master/editUset';
import ManufacturerDetails from './content/applications/Manufacturers/Details';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Master
const MasterList = Loader(
  lazy(() => import('src/content/applications/Master'))
);

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const Manufacturers = Loader(
  lazy(() => import('src/content/applications/Manufacturers'))
);
const AddManufacturer = Loader(
  lazy(() => import('src/content/applications/Manufacturers/add'))
);
const EditManufacturer = Loader(
  lazy(() => import('src/content/applications/Manufacturers/edit'))
);

const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);


const CheckAuth = () => {

  const navigate = useNavigate();

  const checkingAuth = () => {

  }

  useEffect(()=>{
    let auth = localStorage.getItem("auth");
    if(!auth){
      navigate('/admin/login');
    };
    checkingAuth();
  }, [])

  return (<>
    <Outlet />
  </>)
}

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: '/admin/login',
        element: <Login />
      },
      {
        path: '/admin/forgot-password',
        element: <Forgotpassword />
      },
      {
        path: '/admin/reset-password',
        element: <Resetpassword />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: '/',
    element: <CheckAuth />,
    children: [
      {
        path: '',
        element: <Manufacturers />
      },
      {
        path: 'add',
        element: <AddManufacturer />
      },
      {
        path: 'edit',
        element: <EditManufacturer />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      },
      {
        path: 'details/:id',
        element: <ManufacturerDetails />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Manufacturers />
          },
          {
            path: 'add',
            element: <AddManufacturer />
          },
          {
            path: 'edit',
            element: <EditManufacturer />
          },
          {
            path: 'crypto',
            element: <Crypto />
          },
          {
            path: 'messenger',
            element: <Messenger />
          }
        ]
      },
      {
        path: 'dashboards',
        element: <SidebarLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="crypto" replace />
          },
          {
            path: 'crypto',
            element: <Crypto />
          },
          {
            path: 'messenger',
            element: <Messenger />
          }
        ]
      },
      {
        path: 'management',
        element: <SidebarLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="transactions" replace />
          },
          {
            path: 'transactions',
            element: <Transactions />
          },
          {
            path: 'profile',
            children: [
              {
                path: '',
                element: <Navigate to="details" replace />
              },
              {
                path: 'details',
                element: <UserProfile />
              },
              {
                path: 'settings',
                element: <UserSettings />
              }
            ]
          }
        ]
      },
      {
        path: 'master',
        element: <SidebarLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="list" replace />
          },
          {
            path: 'list',
            element: <MasterList />
          },
          {
            path: 'add-user',
            element: <AddUser />
          },
          {
            path: 'edit-user',
            element: <EditUser />
          }
        ]
      },
      {
        path: '/components',
        element: <SidebarLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="buttons" replace />
          },
          {
            path: 'buttons',
            element: <Buttons />
          },
          {
            path: 'modals',
            element: <Modals />
          },
          {
            path: 'accordions',
            element: <Accordions />
          },
          {
            path: 'tabs',
            element: <Tabs />
          },
          {
            path: 'badges',
            element: <Badges />
          },
          {
            path: 'tooltips',
            element: <Tooltips />
          },
          {
            path: 'avatars',
            element: <Avatars />
          },
          {
            path: 'cards',
            element: <Cards />
          },
          {
            path: 'forms',
            element: <Forms />
          }
        ]
      }
    ]
  },
<<<<<<< HEAD
=======
  {
    path: 'admin/content_type',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <MasterList />
      },
      {
        path: 'add-user',
        element: <AddUser />
      },
      {
        path: 'edit-user',
        element: <EditUser />
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
>>>>>>> 143fd7cff889a3f284ec6cd26947215f34730252
];

export default routes;
