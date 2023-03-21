import React, { useEffect, useState } from "react";

const ClothesList = (props) => {
  const [data, setData] = useState([]);

  const formatData = (clothes) => {
    setData(clothes.slice(0, 100));
  };

  useEffect(() => {
    formatData(props.clothes);
  }, [props.clothes]);

  return (
    //     <div class="card" style="width: 18rem;">
    //   <img class="card-img-top" src="..." alt="Card image cap">
    //   <div class="card-body">
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>
    <div className="text-black row capa">
      {data.length !== 0
        ? data.map((product, index) =>
            product[6] === props.season ? (
              <div
                key={index}
                className="card image-container d-flex flex-column align-items-center justify-content-center m-2"
              >
                <img
                  src={`/images/${product[0]}.jpg`}
                  title={product[9]}
                  alt={product[9]}
                  width="100px"
                  className="card-img-top"
                ></img>
                <div class="card-body">
                  <p class="card-text">{product[9]}</p>
                </div>
              </div>
            ) : (
              ""
            )
          )
        : ""}
    </div>
  );
};

export default ClothesList;
