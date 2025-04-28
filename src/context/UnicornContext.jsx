import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UnicornContext = createContext();

export const useUnicorns = () => useContext(UnicornContext);

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const API_URL = "https://crudcrud.com/api/4c65fa6d329445f3a76b16c90ec08b4c/unicorns";

  const getUnicorns = async () => {
    try {
      const res = await axios.get(API_URL);
      setUnicorns(res.data);
    } catch (error) {
      console.error("Error al obtener unicornios", error);
    }
  };

  const createUnicorn = async (data) => {
    try {
      await axios.post(API_URL, data);
      await getUnicorns(); // 👈 Refrescamos la lista después de crear
    } catch (error) {
      console.error("Error al crear unicornio", error);
    }
  };

  const editUnicorn = async (id, data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      await getUnicorns(); // 👈 Refrescamos la lista después de editar
    } catch (error) {
      console.error("Error al editar unicornio", error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUnicorns(unicorns.filter((u) => u._id !== id)); // Borrado local puede quedar bien
    } catch (error) {
      console.error("Error al eliminar unicornio", error);
    }
  };

  useEffect(() => {
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider
      value={{
        unicorns,
        getUnicorns,
        createUnicorn,
        editUnicorn,
        deleteUnicorn,
      }}
    >
      {children}
    </UnicornContext.Provider>
  );
};
