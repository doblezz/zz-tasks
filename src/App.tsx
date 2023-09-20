import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router'; // Importa el componente de enrutamiento

function App() {
  return (
    <Router>
      <div className="App">
        {/* Puedes agregar elementos globales aquí, como encabezados y pies de página */}
        <Routes />
      </div>
    </Router>
  );
}

export default App;
