import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from './ErrorPage';
import Home from './components/Home-Page/Home'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Spaces from './components/Spaces/Spaces';
import Contact from './components/Contact/Contact';
import Process from './components/Process/Process';
import Closet from './components/Spaces/Closet';
import Office from './components/Spaces/Office';
import Garage from './components/Spaces/Garage';
import Pantrie from './components/Spaces/Pantrie';
import GarageFloor from './components/Spaces/GarageFloor';
import OtherSpace from './components/Spaces/OtherSpace';

// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/spaces',
        element: <Spaces />,
      },
      {
        path: '/spaces/closet',
        element: <Closet />
      },
      {
        path: '/spaces/office',
        element: <Office />
      },
      {
        path: '/spaces/garage',
        element: <Garage />
      },
      {
        path: '/spaces/pantrie',
        element: <Pantrie />
      },
      {
        path: '/spaces/garage-floor',
        element: <GarageFloor />
      },
      {
        path: '/spaces/other',
        element: <OtherSpace />
      },
      {
        path: '/process',
        element: <Process />
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
