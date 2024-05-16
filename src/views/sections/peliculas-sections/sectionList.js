import React from "react";
import SectionPelicula from "views/sections/peliculas-sections/sectionPelicula";

const PeliculasList = ({ peliculas }) => (
  <div>
    <h2>Lista de Peliculas</h2>
   
    {peliculas.length > 0 ? (
                <>
                    <div className="card-containerGrande">
                    {peliculas.map((pelicula, index) => (
                        <SectionPelicula key={index} pelicula={pelicula} />
                    ))}
                    </div>
                </>
            ) : (
                <h2>Añade alguna pelicula para ver sus datos</h2>
            )}
  </div>
);

export default PeliculasList;
