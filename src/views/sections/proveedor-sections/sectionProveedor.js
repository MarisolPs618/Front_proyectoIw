import React from "react";

export const SectionProveedor = (props) => {
    const { proveedor} = props;

    return (
        <div id="section">
            <h6 key={proveedor.pk}>{proveedor.comentario}</h6>
        </div>
    );
};

export default SectionProveedor;
