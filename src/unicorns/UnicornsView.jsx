import { useEffect } from "react";
import { useUnicorns } from "../context/UnicornContext";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const UnicornsView = () => {
  const { unicorns, getUnicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

  useEffect(() => {
    getUnicorns();
  }, []);

  const handleEdit = (id) => {
    navigate(`/unicornios/editar/${id}`);
  };

  const handleDelete = (id) => {
    if (confirm("¿Seguro que querés eliminar este unicornio?")) {
      deleteUnicorn(id);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4" style={{ color: "#4b007d" }}>
        Lista de Unicornios
      </h2>

      <Button
        label="Crear nuevo"
        icon="pi pi-plus"
        className="mb-4"
        onClick={() => navigate("/unicornios/crear")}
        style={{
          background: "linear-gradient(135deg, #ffb7eb, #a6c1ee)",
          border: "none",
          color: "#4b007d",
          fontWeight: "bold",
          boxShadow: "0 6px 16px rgba(255, 183, 235, 0.4)",
        }}
      />

      <div className="grid gap-3">
        {unicorns.map((unicorn) => (
          <Card
            key={unicorn._id}
            title={unicorn.name}
            style={{
              background: "linear-gradient(145deg, #ffffff, #ffe8f9)",
              borderRadius: "25px",
              boxShadow: "0 6px 16px rgba(255, 183, 235, 0.4)",
            }}
          >
            <div style={{ color: "#000" }}>
              <p>Color: {unicorn.color}</p>
              <p>Edad: {unicorn.age}</p>
              <p>Poder: {unicorn.power}</p>
            </div>

            <div className="flex gap-2 mt-2">
              <Button
                label="Editar"
                icon="pi pi-pencil"
                onClick={() => handleEdit(unicorn._id)}
                style={{
                  background: "#ffe6ff",
                  color: "#4b007d",
                  border: "none",
                  fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(174, 144, 255, 0.3)",
                }}
              />
              <Button
                label="Eliminar"
                icon="pi pi-trash"
                onClick={() => handleDelete(unicorn._id)}
                style={{
                  background: "#ffcce0",
                  color: "#4b007d",
                  border: "none",
                  fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(255, 183, 235, 0.4)",
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UnicornsView;
