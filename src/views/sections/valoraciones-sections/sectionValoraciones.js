import React, { useEffect, useState } from "react";
import axios from "axios";

import SectionValoracion from "views/sections/valoraciones-sections/sectionValoracion"

export const SectionValoraciones = () => {
    const [valoraciones, setValoraciones] = useState([]);

    const [formData, setFormData] = useState({
        pelicula: "",
        valoracion: 1,
        comentario: ""
    });

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/valoracion/',
        })
            .then((response) => {
                console.log(response.data)
                setValoraciones([...response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://localhost:8000/valoracion/",
            data: formData
        })
        .then((response) => {
            console.log("¡Valoracion enviada!:", response.data);
            setFormData({
                pelicula: "",
                valoracion: 1,
                comentario: ""
            });
            // Vuelve a cargar la lista de valoraciones después de crear una
            axios({
                method: "get",
                url: 'http://127.0.0.1:8000/valoracion/',
            })
            .then((response) => {
                setValoraciones([...response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => {
            console.error("Error al enviar la valoracion:", error);
        });
    };


    return (

        <div id="section">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="pelicula">Película:</label>
                    <input
                        type="text"
                        id="pelicula"
                        name="pelicula"
                        value={formData.pelicula}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="valoracion">Valoración:</label>
                    <input
                        type="number"
                        id="valoracion"
                        name="valoracion"
                        value={formData.valoracion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="comentario">Comentario:</label>
                    <input
                        type="text"
                        id="comentario"
                        name="comentario"
                        value={formData.comentario}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn-round mr-1 btn btn-success">Enviar valoracion</button>
            </form>

            <h2>Lista de Valoraciones recientes</h2>
            <h3> </h3>
            {valoraciones.map((valoracion) => (
                <SectionValoracion
                    key={valoracion.pk}
                    valoracion={valoracion}
                />
            ))}
        </div>
    );
};

export default SectionValoraciones;
