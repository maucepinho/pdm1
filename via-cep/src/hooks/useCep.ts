import { useContext } from 'react';
import { CepContext } from '../contexts/CepContext';
import api from '../services/viaCep';
import { Endereco } from '../types';

export const useCep = () => {
  const context = useContext(CepContext);
  if (!context) {
    throw new Error('useCep deve ser usado dentro de um CepProvider');
  }

  
  const { setEndereco, setErro, setCepsConsultados } = context;

  const buscarCep = async (cep: string) => {
    try {
      const response = await api.get(`/${cep}/json/`);
      
      if (response.data.erro) {
        setErro('CEP inválido');
        setEndereco(null);
      } else {
        const data: Endereco = response.data;
        setEndereco(data);
        setCepsConsultados(prevCeps => [...prevCeps, data]); 
        setErro(null);
      }
    } catch (error) {
      console.error(error);
      setErro('Ocorreu um erro ao buscar o CEP.');
      setEndereco(null);
    }
  };

  return { ...context, buscarCep };
};