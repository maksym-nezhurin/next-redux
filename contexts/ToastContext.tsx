'use client'
import React, { createContext, ReactNode, useContext } from 'react';
import { toast, ToastContainer, ToastContent, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextType {
    success: (content: ToastContent, options?: ToastOptions) => void;
    error: (content: ToastContent, options?: ToastOptions) => void;
    info: (content: ToastContent, options?: ToastOptions) => void;
    warning: (content: ToastContent, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ToastContext.Provider value={toast}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

// Define a hook to use the toast context
export const useToast = () => {
    return useContext(ToastContext);
};
