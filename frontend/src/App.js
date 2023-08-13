import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventsRootLayout from './pages/EventRoot';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, {action as newsletterAction} from './pages/Newsletter';
import AuthenticationPage ,{action as authAction} from './pages/Authentication';
import logoutAction from './pages/Logout';
import { tokenLoader , checkAuthLoader } from './util/auth';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':someId',
            id: 'eventDetail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },{
        path: 'newsletter',
        element: <NewsletterPage/>,
        action: newsletterAction,
      },
      {path: 'auth',
      element: <AuthenticationPage/>,
      action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;