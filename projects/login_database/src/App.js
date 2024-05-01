import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoclose={2000} />
      <RoutesApp/>
    </BrowserRouter>
  );
}