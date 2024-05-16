import React, { useEffect, useState } from "react";
import axios from "axios";

import SectionPelicula from "views/sections/peliculas-sections/sectionPelicula"

export const SectionPeliculas = () => {
    const [peliculas, setPeliculas] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        fechaEstreno: "",
        sinopsis: "",
        director:"",
        duracion: 0
    });

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/pelicula/',
        })
            .then((response) => {
                console.log(response.data)
                setPeliculas([...response.data]);
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
            url: "http://localhost:8000/pelicula/",
            data: formData
        })
            .then((response) => {
                console.log("Pelicula Agregada:", response.data);
                setFormData({
                    name: "",
                    fechaEstreno: "",
                    sinopsis: "",
                    director:"",
                    duracion: 0
                });
                // Vuelve a cargar la lista de peliculas después de crear una pelicula
                axios({
                    method: "get",
                    url: 'http://127.0.0.1:8000/pelicula/',
                })
                    .then((response) => {
                        setPeliculas([...response.data]);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error("Error al crear una pelicula:", error);
            });
    };


    return (

        <div id="section">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="fechaEstreno">Fecha de Estreno:</label>
                    <input
                        type="date"
                        id="fechaEstreno"
                        name="fechaEstreno"
                        value={formData.fechaEstreno}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="director">Director:</label>
                    <input
                        type="text"
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="duracion">Duracion:</label>
                    <input
                        type="number"
                        id="duracion"
                        name="duracion"
                        value={formData.duracion}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="duracion">sinopsis:</label>
                    <input
                        type="text"
                        id="sinopsis"
                        name="sinopsis"
                        value={formData.sinopsis}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn-round mr-1 btn btn-success">Agregar Pelicula</button>
            </form>

        </div>
    );
};

export default SectionPeliculas;
