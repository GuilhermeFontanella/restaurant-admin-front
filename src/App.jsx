import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ConfirmSignup from './pages/ConfirmSignup'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLeads from './pages/admin/AdminLeads'
import ResetPassword from './pages/admin/ResetPassword'
import ProtectedRoute from './pages/admin/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cadastro/confirmar/:token" element={<ConfirmSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/redefinir-senha" element={<ResetPassword />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin/leads" element={<AdminLeads />} />
      </Route>
    </Routes>
  )
}

export default App
