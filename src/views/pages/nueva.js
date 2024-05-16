import React, { useEffect, useState } from "react";
import axios from "axios";
import PeliculasList from "views/sections/peliculas-sections/sectionList.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

export const OtraPagina = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
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
    }, []);

    return (
        <>
        <IndexNavbar />
        <IndexHeader />
        <div id="section">
            <PeliculasList peliculas={peliculas} />
        </div>
        </>
    );
};

export default OtraPagina;

