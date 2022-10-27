import React, { useState } from "react";
export default function Movie(props) {
  const [age, setAge] = useState(current - props.releaseyear);
  return (
    <div>
      <hr>
        <h1>{props.title}</h1>
        <h2>{props.director}</h2>
        <h3>{props.genre}</h3>
        <h4>{props.year}</h4>
        <h5>{props.age}</h5>
      </hr>
    </div>
  );
}
