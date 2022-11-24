import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@/error-page'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Estimate from '@/pages/Estimate'
import SteelVolume from '@/pages/SteelVolume'
import ConstructionNorms from '@/pages/ContructionNorms'
import ProjectCosts from '@/pages/ProjectCosts'
import ConstructionDocs from '@/pages/ConstructionDocs'
import MateriaPrice from '@/pages/MateriaPrice'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/estimate',
    element: <Estimate />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/steel-volume',
    element: <SteelVolume />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/construction-norms',
    element: <ConstructionNorms />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/project-costs',
    element: <ProjectCosts />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/construction-docs',
    element: <ConstructionDocs />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/materia-price',
    element: <MateriaPrice />,
    errorElement: <ErrorPage />,
  },
])
