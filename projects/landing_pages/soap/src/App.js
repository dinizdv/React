import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <RoutesApp/>
    </BrowserRouter>
    );
}

export default App;
