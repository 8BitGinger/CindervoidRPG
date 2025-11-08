import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Sphere from './pages/Sphere.jsx';
import HowToPlay from './pages/HowToPlay.jsx';
import GameMasters from './pages/GameMasters.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/sphere',
        element: <Sphere />,
      },
      {
        path: '/how-to-play',
        element: <HowToPlay />,
      },
      {
        path: '/game-masters',
        element: <GameMasters />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },


    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
