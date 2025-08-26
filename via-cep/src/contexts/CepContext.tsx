// src/contexts/CepContext.tsx

import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Endereco } from '../types';

interface CepContextData {
  endereco: Endereco | null;
  setEndereco: Dispatch<SetStateAction<Endereco | null>>;
  // Adicione as duas linhas abaixo
  erro: string | null;
  setErro: Dispatch<SetStateAction<string | null>>;
  cepsConsultados: Endereco[];
  setCepsConsultados: Dispatch<SetStateAction<Endereco[]>>;
  buscarCep: (cep: string) => Promise<void>;
}

export const CepContext = createContext<CepContextData>({} as CepContextData);

export const CepProvider = ({ children }: { children: ReactNode }) => {
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [cepsConsultados, setCepsConsultados] = useState<Endereco[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  const buscarCep = async (cep: string) => {
  };

  return (
    <CepContext.Provider value={{ 
      endereco, setEndereco, 
      erro, setErro,
      cepsConsultados, setCepsConsultados,
      buscarCep 
    }}>
      {children}
    </CepContext.Provider>
  );
};