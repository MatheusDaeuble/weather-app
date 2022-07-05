import React, { createContext, useCallback, useState } from 'react';

export interface ToastMessage {
  id: string;
  type?: 'error' | 'warning' | 'success';
  content: string;
}

export interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
  messages: ToastMessage[];
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const addToast = useCallback(
    ({ type, content }: Omit<ToastMessage, 'id'>) => {
      if (messages.find(msg => msg.content === content)) return;

      const id = String(Date.now());

      const toast = { id, type, content };

      setMessages([...messages, toast]);

      setTimeout(() => removeToast(id), 2000);
    },
    [messages, removeToast]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}
    </ToastContext.Provider>
  );
};
