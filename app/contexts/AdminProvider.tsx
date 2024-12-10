import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the AdminContext type
interface AdminContextType {
  isAdmin: boolean;
  loginAsAdmin: () => void;
  logoutAdmin: () => void;
}

// Create the context
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Define props for the provider
interface AdminProviderProps {
  children: ReactNode;
}

// Provider Component
export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Default: non-admin

  // Function to set admin status
  const loginAsAdmin = () => {
    setIsAdmin(true);
  };

  // Function to log out admin
  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// Hook to use the context in components
export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
