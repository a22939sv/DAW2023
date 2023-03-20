import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Styles from "../styles.csv";
import ClothesListHeading from "../components/ClothesListHeading";
import ClothesList from "../components/ClothesList";

const Home = () => {
  const [data, setData] = useState([]);

  const formatData = () => {
    fetch(Styles)
      .then((d) => d.text())
      .then((text) => {
        setData(
          text
            .slice(true ? text.indexOf("\n") + 1 : 0)
            .split("\n")
            .map((l) => l.split(","))
        );
      });
  };

  useEffect(() => {
    formatData();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <header>
        <NavBar />
      </header>
      <main className="container-fluid text-white">
        <div className="row">
          <Carousel />
        </div>
        <div className="row mt-5">
          <ClothesListHeading heading="Listado de Ropa Masculina" />
        </div>
        <div className="row d-flex">
          <ClothesList clothes={data} gender="Men" />
        </div>
        <div className="row mt-5">
          <ClothesListHeading heading="Listado de Ropa Femenina" />
        </div>
        <div className="row d-flex">
          <ClothesList clothes={data} gender="Women" />
        </div>
      </main>
      <footer className="pieDePagina py-3 mt-4 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
