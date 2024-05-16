import React from "react";
import axios from "axios";

export const SectionPelicula = (props) => {
    const { pelicula} = props;

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/pelicula/${pelicula.pk}`)
        window.location.reload();
           
    };

    const handleDetalles = () => {
        window.location.href = `/peliculas/${pelicula.pk}`;
    };

    const handleModify = () => {
        window.location.href = `/peliculas/${pelicula.pk}/editar`;
    };


    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/pelicula/${pelicula.pk}`)
        window.location.reload();
           
    };

    return (
        <div id="card_container">
            <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                    <h1>{pelicula.name}<small>{pelicula.fechaEstreno}</small></h1>
                    <h3>{pelicula.director}</h3>
                    <p>{pelicula.sinopsis}</p>
                    <button>Valorar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                    <button onClick={handleDetalles}>Detalles</button>
                    <button onClick={handleModify}>Modificar</button>
                </div>
            </div>
        </div>
    );
};

export default SectionPelicula;
