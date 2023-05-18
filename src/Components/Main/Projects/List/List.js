import "./List.css";
import React, { useState } from "react";

export default function List(props) {
  const list = props.projects.images.map((item) => {
    return (
      <div className="cards" key={item.id}>
        <img src={item.img} alt="img" onClick={() => props.handleClick(item)} />
      </div>
    );
  });

  return list;
}
