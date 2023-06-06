import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour}></Tour>;
      })}
    </div>
  );
};

export default Tours;
