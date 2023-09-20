import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';

// import Layouts
import Navbar from './components/layouts/nav-bar/NavBar';

// import styles generals
import './style/styles.scss'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="ContainerApp">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
