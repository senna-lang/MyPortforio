'use client'
import {
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react';

interface AppContextType {
  isTransition: boolean;
  setIsTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextData: AppContextType = {
  isTransition: false,
  setIsTransition: () => {},
};

interface AppProviderProps {
  children: ReactNode; // children の型を ReactNode に指定
}

const AppContext = createContext<AppContextType>(defaultContextData);

export function AppProvider({ children }: AppProviderProps) {
  const [isTransition, setIsTransition] = useState<boolean>(false); // userの型をより詳細に指定できます。

  return (
    <AppContext.Provider value={{ isTransition, setIsTransition }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
