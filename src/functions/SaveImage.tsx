import React, { useState } from 'react';
/*
const CargarImagenTemporal: React.FC = () => {
  const [imagenTemporal, setImagenTemporal] = useState<string | null>(null);

  const handleImagenSeleccionada = (event: React.ChangeEvent<HTMLInputElement>) => {
    const archivoImagen = event.target.files?.[0];

    if (archivoImagen) {
      const urlTemporal = URL.createObjectURL(archivoImagen);
      setImagenTemporal(urlTemporal);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImagenSeleccionada} />
      {imagenTemporal && <img src={imagenTemporal} alt="Imagen Temporal" />}
    </div>
  );
};

export default CargarImagenTemporal;
*/