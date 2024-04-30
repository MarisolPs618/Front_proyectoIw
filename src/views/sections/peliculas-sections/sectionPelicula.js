import React from "react";

export const SectionPelicula = (props) => {
    const { pelicula } = props;

    return (
        <div id="section">
            <h6 key={pelicula.pk}>{pelicula.name}</h6>
        </div>
    );
};

export default SectionPelicula;

//
