import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


export const SectionValoracion = (props) => {
    const { valoracion } = props;
    const [pelicula, setPelicula] = useState([]);

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/valoracion/${valoracion.pk}`)
        window.location.reload();           
    };
    
    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8000/pelicula/" + valoracion.pelicula,
        })
            .then((response) => {
                setPelicula(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div id="section">
            <h5 key={valoracion.pk}> {pelicula.name} - Nota: {valoracion.valoracion}</h5>
            <p>{valoracion.comentario}</p>
            <button class="mr-1 btn btn-outline-danger btn-sm" onClick={handleDelete}>Eliminar</button>
        </div>
    );
};

export default SectionValoracion;
