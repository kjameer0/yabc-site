import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorPage } from "ErrorPage";
import { createGlobalStyle } from 'styled-components';
import {
  About,
  Admissions,
  Contact,
  ContactForm,
  CounselorCorner,
  Enrollment,
  HomePage,
  InfoRequestForm,
  MissionSociety,
  Parents,
  SharedAdmissions,
  Staff,
  StudentCorner,
  TeacherHub,
} from './pages';
import { baseUrl } from 'project-constants';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: baseUrl, element: <HomePage />, errorElement: <ErrorPage />, children: [] },
      { path: baseUrl + 'about', element: <About />, errorElement: <ErrorPage />, children: [] },
      {
        path: baseUrl + 'admissions',
        element: <Admissions />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'contact',
        element: <Contact />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'counselor-contact-form',
        element: <ContactForm />,
        errorElement: <ErrorPage />,
        children: [],
      },
      // ADD in props for contact forms!!!
      {
        path: baseUrl + 'site-administrator-contact-form',
        element: <ContactForm />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'counselor-corner',
        element: <CounselorCorner />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'enrollment',
        element: <Enrollment />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'information-request-form',
        element: <InfoRequestForm />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'mission-society-of-new-york',
        element: <MissionSociety />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'parents-families',
        element: <Parents />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'shared-admissions',
        element: <SharedAdmissions />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'staff-directory',
        element: <Staff />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'student-corner',
        element: <StudentCorner />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: baseUrl + 'teacher-hub',
        element: <TeacherHub />,
        errorElement: <ErrorPage />,
        children: [],
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; $blackBackground?: boolean }>`
  :root {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    min-width: 375px;
    max-width: 1440px;
    min-height: 667px;
    color: white;
    --primary-bg: red;
    --main-bg: #A1D537;
  }
  body {
    background: black;
    margin: 0;
  }

`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
