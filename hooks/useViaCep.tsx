import axios from "axios";

export async function getAddressByCep(cep: string) {
    try {
      const unmaskCep = cep.replace(/\D/g, '');
  
      if (unmaskCep.length !== 8) {
        throw new Error("CEP inválido");
      }
  
      const url = `https://viacep.com.br/ws/${unmaskCep}/json/`;
  
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw ({ message: "CEP não encontrado ou inválido", type: "error" });
    }
  }
  