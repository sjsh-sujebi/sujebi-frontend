import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import StudentRegistration from "./components/StudentRegistration";
import MainPage from "./components/MainPage";
import Processing from "./components/Processing";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Verify from './components/Verify';
import HowToUse from './components/HowToUse';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App child={<MainPage />} />
    )
  },
  {
    path: '/register',
    element: (
      <App child={<StudentRegistration />} />
    )
  },
  {
    path: '/processing',
    element: (
      <App child={<Processing />} />
    )
  },
  {
    path: '/mypage',
    element: (
      <App child={<HomePage />} />
    )
  },
  {
    path: '/login',
    element: (
      <App child={<StudentLogin />} />
    )
  },
  {
    path: '/verify',
    element: (
      <App child={<Verify />} />
    )
  },
  {
    path: '/usage',
    element: (
      <App child={<HowToUse />} />
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
