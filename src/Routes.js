import {
  Routes,
  Route,
} from 'react-router-dom'
import { urls } from './constants'
import Home from './pages/Home/Home'

const AppRoutes = () => (
  <Routes>
    <Route path={urls.home} element={<Home />} />
  </Routes>
)

export default AppRoutes

