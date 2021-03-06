import { BrowserRouter } from 'react-router-dom'
import './i18n/config'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './Routes'

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

export default App
