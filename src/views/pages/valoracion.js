import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter";
import IndexHeader from "components/Headers/IndexHeader.js";

import SectionPelicula from "views/sections/valoraciones-sections/editarValoracion.js";

function Pelicula() {

    const { id } = useParams();
    const [pelicula, setPelicula] = useState()

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8000/pelicula/" + id,
        })
            .then((response) => {
                setPelicula(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                {
                    pelicula &&
                    <SectionPelicula
                        key={pelicula.pk}
                        pelicula={pelicula}
                    />
                }
            </div>
            <br />

            <DemoFooter className="index-page" />
        </>
    );
}

export default Pelicula;