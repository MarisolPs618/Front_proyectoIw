import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter";
import SectionPeliculas from "views/sections/peliculas-sections/sectionPeliculas.js";

function Peliculas() {
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
          <h1>Peliculas</h1>
        </div>
        <SectionPeliculas />
      </div>
      <br/>
      <DemoFooter className="index-page"/>
    </>
  );
}

export default Peliculas;



