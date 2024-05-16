import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter";
import SectionValoraciones from "views/sections/valoraciones-sections/sectionValoraciones";

function Valoraciones() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="page-title">
          <h1>Valorar película</h1>
          <h2></h2>
        </div>
        <SectionValoraciones />
      </div>
      <br/>
      <DemoFooter className="index-page"/>
    </>
  );
}

export default Valoraciones;



