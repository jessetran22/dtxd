import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@/error-page'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Estimate from '@/pages/Estimate'
import SteelVolume from '@/pages/SteelVolume'
import ConstructionNorms from '@/pages/ContructionNorms'
import ProjectCosts from '@/pages/ProjectCosts'
import ConstructionDocs from '@/pages/ConstructionDocs'
import MaterialPrice from '@/pages/MaterialPrice'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: '/estimate',
    element: <Estimate />,
  },
  {
    path: '/steel-volume',
    element: <SteelVolume />,
  },
  {
    path: '/construction-norms',
    element: <ConstructionNorms />,
  },
  {
    path: '/project-costs',
    element: <ProjectCosts />,
  },
  {
    path: '/construction-docs',
    element: <ConstructionDocs />,
  },
  {
    path: '/material-price',
    element: <MaterialPrice />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
])
