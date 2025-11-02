
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom"
import CyberBackground from './Components/CyberBackground';
import Layout from "./Pages/Layout"
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import EventsPage from './Pages/EventsPage';
import BlogPage from './Pages/BlogPage';
import ResourcesPage from './Pages/ResourcesPage';
import JoinUsPage from './Pages/JoinUsPage';
import ErrorPage from './Components/ErrorPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage/>}>
      <Route index element={<HomePage />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="Events" element={<EventsPage />} />
      <Route path="Blog" element={<BlogPage />} />
      <Route path="Resources" element={<ResourcesPage />} />
      <Route path="JoinUs" element={<JoinUsPage />} />
    </Route>,
  ),
  {
    future: {
      v7_scrollRestoration: true,
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_prependBasename: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
    }
  }
)

function App() {
  return (
    <CyberBackground>
      <RouterProvider router={router} />
    </CyberBackground>
  );
}

export default App

