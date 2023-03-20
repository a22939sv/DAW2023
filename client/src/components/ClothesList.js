import React, { useEffect, useState } from "react";

const ClothesList = (props) => {
  console.log(props.gender);
  const [data, setData] = useState([]);

  const formatData = (clothes) => {
    setData(clothes.slice(0, 100));
  };

  useEffect(() => {
    formatData(props.clothes);
  }, [props.clothes]);

  return (
    <div className="text-black row capa">
      {data.length !== 0
        ? data.map((product, index) =>
            product[6] === props.season ? (
              <div
                key={index}
                className="image-container d-flex flex-column align-items-center justify-content-center m-3"
              >
                <img
                  src={`/images/${product[0]}.jpg`}
                  title={product[9]}
                  alt={product[9]}
                  width="180px"
                ></img>
                <h5>{product[9]}</h5>
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
