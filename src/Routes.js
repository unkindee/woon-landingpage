import {
  Routes,
  Route,
} from 'react-router-dom'
import PageMetaTitle from './components/PageMetaTitle'
import { urls } from './constants'
import Home from './pages/Home/Home'
import MainLayout from './partials/MainLayout'

const ComingSoon = ({ title }) => (
  <MainLayout>
    <PageMetaTitle title={title} />
    <div style={{ minHeight: '400px', paddingTop: '200px' }}>Coming Soon: {title}</div>
  </MainLayout>
)

const AppRoutes = () => (
  <Routes>
    <Route path={urls.home} element={<Home />} />
    <Route path={urls.ik_huur} element={<ComingSoon title={urls.ik_huur} />} />
    <Route path={urls.ik_zoek} element={<ComingSoon title={urls.ik_zoek} />} />
    <Route path={urls.projecten} element={<ComingSoon title={urls.projecten} />} />
    <Route path={urls.contact} element={<ComingSoon title={urls.contact} />} />

    <Route path="*" element={<div>Not found</div>} />
  </Routes>
)

export default AppRoutes

