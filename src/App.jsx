import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LandingPageLayout from './layouts/LandingPageLayout'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
