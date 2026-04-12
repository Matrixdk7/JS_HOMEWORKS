import { useState } from 'react';
import { ToastContext } from './toastContext.js';
import ToastMessage from './ToastMessage.jsx';

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastMessage toasts={toasts} />
        </ToastContext.Provider>
    );
};