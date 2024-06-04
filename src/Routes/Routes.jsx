import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Tour from '../Pages/Tour/Tour';
import Contact from '../Pages/Contact/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/tour',
        element: <Tour></Tour>,
      },
      {
        path: '/contactUs',
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
