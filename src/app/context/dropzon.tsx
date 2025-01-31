
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
type AppContextType = {
    primrayKeyword: string; // The state variable
    setPrimrayKeyword: React.Dispatch<React.SetStateAction<string>>; // Function to update the state
    AIModel: string; // The state variable
    setAIModel: React.Dispatch<React.SetStateAction<string>>; 
    selectedLang: string[];
    setSelectedLang: React.Dispatch<React.SetStateAction<>>;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [primrayKeyword, setPrimrayKeyword] = useState<string>(""); 
  const [AIModel, setAIModel] = useState<string>(""); 
  const [selectedLang, setSelectedLang] = useState();

  return (
    <AppContext.Provider value={{ 
        primrayKeyword, setPrimrayKeyword, AIModel, setAIModel, selectedLang, setSelectedLang
       }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook for consuming the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
