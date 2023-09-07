import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './pages/List.tsx';
import Detail from './pages/Detail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <List />,
      },
      {
        path: '/:id',
        element: <Detail />,
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
