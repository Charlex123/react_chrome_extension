import { Navigate, useRoutes } from 'react-router-dom';
import Social from "./components/Social";
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Privacy from './components/Privacy';
import Terms from './components/Terms';


// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/social', element: <Social /> },
    { path: '/privacy-policy', element: <Privacy /> },
    { path: '/terms', element: <Terms /> },
    { path: '/', element: <Login /> },
  ]);
}