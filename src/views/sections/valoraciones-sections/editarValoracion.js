import React, { useState } from "react";
import axios from "axios";

export const SectionEditar = ({ pelicula, setValoraciones }) => {
    const [formData, setFormData] = useState({
        name: pelicula.name,
        valoracion: 1,
        comentario: ""
    });

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
                        value={pelicula.name}
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

        </div>

    );
};

export default SectionEditar;
