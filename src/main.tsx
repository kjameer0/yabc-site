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
@font-face {
  font-family: Inter-bold;
  src: url('/fonts/Inter/static/Inter-Bold.ttf');
}
@font-face {
  font-family: Inter-black;
  src: url('/fonts/Inter/static/Inter-Black.ttf');
}
@font-face {
  font-family: Inter-extra-bold;
  src: url('/fonts/Inter/static/Inter-ExtraBold.ttf');
}
@font-face {
  font-family: Inter-regular;
  src: url('/fonts/Inter/static/Inter-Regular.ttf');
}

@font-face {
  font-family: Inria-serif-light;
  src: url('/fonts/Inria_Serif/InriaSerif-Light.ttf');
}
@font-face {
  font-family: Inria-serif-light-italic;
  src: url('/fonts/Inria_Serif/InriaSerif-LightItalic.ttf');
}
@font-face {
  font-family: Inria-serif-bold-italic;
  src: url('/fonts/Inria_Serif/InriaSerif-BoldItalic.ttf');
}
@font-face {
  font-family: hind-guntur-regular;
  src: url('/fonts/Hind_Guntur/HindGuntur-Regular.ttf');
}
  :root {
    font-family: sans-serif;
    font-size: 16px;
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
    --main-bg: #A1D537;
  }
  body {
    background: black;
    margin: 0;
    text-align: center;
  }
  #root {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  main {
    flex-basis: 90%;
    max-width: 1160px;
  }
  .major-heading {
    font-family: Inter-black, sans-serif;
    font-size: clamp(2rem, 5vw, 5rem);
  }
  .sub-heading {
    font-family: Inter-bold, sans-serif;
    font-size: clamp(1rem, 3vw, 3rem);
  }
  .med-heading {
    font-family: Inter-bold, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
  }
  .smaller-med-heading {
    font-family: Inter-bold, sans-serif;
    font-size: clamp(1.5rem, 4vw, 3rem);
  }
  .para-content {
    font-family: hind-guntur-regular, sans-serif;
    width: 99%;
    line-height: calc(22/16px);
    font-size: clamp(14px, 2vw, 1.5rem);
  }
  .ital-para-text {
    font-family: Inria-serif-light-italic;
    font-size: clamp(1.1rem, 2vw, 1.6rem);
  }
  .ital-para-text-bold {
    font-family: Inria-serif-bold-italic;
    font-size: clamp(1.1rem, 2vw, 1.6rem);
  }
  .logo {
    margin-top: 30px;
    margin-left: 40px;
    min-width: 169px;
    max-width: 174px;
    width: 169px;
    height: auto;
  }
  @media screen and (min-width: 700px) {
    #root {
      justify-content: flex-end;
      /* border: 10px solid red; */
    }
    main {
      margin-top: -90px;
      flex-basis: 90%;
    }
    .spacer {
      display: none;
      background: red;
      flex-basis: 20%;
      z-index: 2;
      height: 400px;
    }
  }
`;
//min 465 max 90vw

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
