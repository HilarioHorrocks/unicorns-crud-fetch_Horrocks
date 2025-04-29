import { createContext, useContext, useEffect, useState } from "react";

const UnicornContext = createContext();

export const useUnicorns = () => useContext(UnicornContext);

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const API_URL = "https://crudcrud.com/api/167eda1c27ac47a6b2c71c23756b0a0d/unicorns";

  const getUnicorns = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener unicornios");
      const data = await res.json();
      setUnicorns(data);
    } catch (error) {
      console.error("Error al obtener unicornios", error);
    }
  };

  const createUnicorn = async (data) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al crear unicornio");
      await getUnicorns(); // Refrescamos la lista después de crear
    } catch (error) {
      console.error("Error al crear unicornio", error);
    }
  };

  const editUnicorn = async (id, data) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al editar unicornio");
      await getUnicorns(); // Refrescamos la lista después de editar
    } catch (error) {
      console.error("Error al editar unicornio", error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar unicornio");
      setUnicorns((prev) => prev.filter((u) => u._id !== id)); // Borrado local
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
