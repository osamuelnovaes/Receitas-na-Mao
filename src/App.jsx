import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;