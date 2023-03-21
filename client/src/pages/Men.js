import React, { useEffect, useState } from "react";
import "../css/Men.css";
import Styles from "../styles.csv";
import ClothesListFilter from "../components/ClothesListFilter";
import ClothesListHeading from "../components/ClothesListHeading";
import NavBar from "../components/NavBar";
import ClothesList from "../components/ClothesList";

const Men = () => {
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
        <div className="row mt-3">
          <ClothesListHeading heading="Mens Clothing" />
        </div>
        <div className="row">
          <ClothesListFilter />
        </div>
        <div className="row mt-2 d-flex align-items-center justify-content-center flex-lg-wrap">
          <ClothesList clothes={data} gender="Men" />
        </div>
      </main>
    </div>
  );
};

export default Men;
