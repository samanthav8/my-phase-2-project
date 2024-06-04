import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home'
import Records from './Records'
import RecordForm from './RecordForm'
import RecordInfo from './RecordInfo';
import ErrorPage from './ErrorPage'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/records",
        element: <Records />,
        errorElement: <ErrorPage />
      },
      {
        path: "/newrecordform",
        element: <RecordForm />,
        errorElement: <ErrorPage />
      },
      {
        path: "/records/:id",
        element: <RecordInfo />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
