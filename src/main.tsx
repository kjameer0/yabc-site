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
        element: <ContactForm version="counselor"/>,
        errorElement: <ErrorPage />,
        children: [],
      },
      // ADD in props for contact forms!!!
      {
        path: baseUrl + 'site-administrator-contact-form',
        element: <ContactForm version="admin"/>,
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
  font-family: Inter-semi-bold;
  src: url('/fonts/Inter/static/Inter-SemiBold.ttf');
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
  font-family: hind-guntur-light;
  src: url('/fonts/Hind_Guntur/HindGuntur-Light.ttf');
}
@font-face {
  font-family: hind-guntur-regular;
  src: url('/fonts/Hind_Guntur/HindGuntur-Regular.ttf');
}
@font-face {
  font-family: hind-guntur-bold;
  src: url('/fonts/Hind_Guntur/HindGuntur-Bold.ttf');
}
@font-face {
  font-family: hind-guntur-medium;
  src: url('/fonts/Hind_Guntur/HindGuntur-Medium.ttf');
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
    letter-spacing: -0.05rem;
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
  h1 {
    margin-bottom: 25px;
  }
  a:hover {
    cursor: pointer;
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
    margin-top: 40px;
    margin-bottom: 20px;
    min-width: 169px;
    max-width: 174px;
    width: 169px;
    height: auto;
  }
  .banner {
      position: fixed;
      z-index:20;
      color: red;
      background: var(--main-bg);
      width: 100vw;
      font-size: 1.2rem;
    }
  @media screen and (min-width: 700px) {
    #root {
      justify-content: flex-start;
      overflow-x: hidden;
    }
    .home-main > * {
      margin-left: 20px;
      margin-right: 20px;
    }
    main {
      position: relative;
      margin-top: 35px;
      margin-left: 10px;
      flex-basis: calc(90% - 150px);
      left: clamp(200px, 20vw, 255px);
    }

  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
