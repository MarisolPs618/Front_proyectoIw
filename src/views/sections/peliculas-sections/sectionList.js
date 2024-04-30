import React from "react";
import SectionPelicula from "views/sections/peliculas-sections/sectionPelicula"

const PeliculasList = ({ peliculas }) => (
    <>
        <h2>Lista de peliculas</h2>
        {peliculas.map((pelicula) => (
            <SectionPelicula
                key={pelicula.pk}
                pelicula={pelicula}
            />
        ))}
    </>
);

export default PeliculasList;
