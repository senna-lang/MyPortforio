'use client';
import { useState, createContext, useContext, ReactNode } from 'react';

interface AppContextType {
  isTransition: boolean;
  setIsTransition: React.Dispatch<React.SetStateAction<boolean>>;
  isPortfolioModalOpen: boolean;
  setIsPortfolioModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNotionModalOpen: boolean;
  setIsNotionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isVtsModalOpen: boolean;
  setIsVtsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextData: AppContextType = {
  isTransition: false,
  setIsTransition: () => {},
  isPortfolioModalOpen: false,
  setIsPortfolioModalOpen: () => {},
  isNotionModalOpen: false,
  setIsNotionModalOpen: () => {},
  isVtsModalOpen: false,
  setIsVtsModalOpen: () => {},
};

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType>(defaultContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] =
    useState<boolean>(false);
  const [isNotionModalOpen, setIsNotionModalOpen] = useState<boolean>(false);
  const [isVtsModalOpen, setIsVtsModalOpen] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isTransition,
        setIsTransition,
        isPortfolioModalOpen,
        setIsPortfolioModalOpen,
        isNotionModalOpen,
        setIsNotionModalOpen,
        isVtsModalOpen,
        setIsVtsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
