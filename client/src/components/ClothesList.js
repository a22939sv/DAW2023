import React, { useEffect, useState } from "react";

const ClothesList = (props) => {
  const [data, setData] = useState([]);

  const formatData = (clothes) => {
    setData(clothes.slice(0, 16));
  };

  useEffect(() => {
    formatData(props.clothes);
  }, [props.clothes]);

  return (
    <div className="text-black row capa">
      {data.length !== 0
        ? data.map((product, index) => (
            <div
              key={index}
              className="image-container d-flex flex-column align-items-center justify-content-center m-3"
            >
              <img
                src={`/images/${product[0]}.jpg`}
                title={product[4]}
                alt={product[4]}
                width="100%"
              ></img>
              <h4>{product[4]}</h4>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ClothesList;
