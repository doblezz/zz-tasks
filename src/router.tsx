import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/notFound'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route element={<NotFound/>} /> {/* Ruta por defecto para errores 404 */}
    </Routes>
  );
}

export default Router;


