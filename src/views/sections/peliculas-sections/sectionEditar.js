import React, { useState } from "react";
import axios from "axios";

export const SectionEditar = ({ pelicula, setPeliculas }) => {
    const [formData, setFormData] = useState({
        name: pelicula.name,
        fechaEstreno: pelicula.fechaEstreno,
        sinopsis: pelicula.sinopsis,
        director: pelicula.director,
        duracion: pelicula.duracion
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/pelicula/${pelicula.pk}/`, formData)
            .then(response => {
                console.log("Pelicula modificada:", response.data);
                if (setPeliculas) {
                    setPeliculas(prevPeliculas => {
                        return prevPeliculas.map(p => {
                            if (p.pk === pelicula.pk) {
                                return response.data;
                            }
                            return p;
                        });
                    });
                }
                window.history.back();
            })
            
            .catch(error => {
                console.error("Error al modificar la película:", error);
            });
    };

    return (
        <div id="section">
            <h2>Editar Película</h2>
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
                    <label htmlFor="sinopsis">Sinopsis:</label>
                    <input
                        type="text"
                        id="sinopsis"
                        name="sinopsis"
                        value={formData.sinopsis}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-info">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default SectionEditar;
