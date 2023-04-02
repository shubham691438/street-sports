import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Routes'
import Home from './pages/Home';



function App() {
  let element=useRoutes(Routes);
  return (
   <>
    {element}
   </>
  );
}

export default App;
