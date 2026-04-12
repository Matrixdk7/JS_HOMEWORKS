import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastProvider} from "./components/Toasts/ToastProvider.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ToastProvider>
        <AppRouter />
    </ToastProvider>
);