import React, {useState} from "react";
import "./style.css";

import data from './data';

import Card from './Card';

export default function App() {
  const [dataTravel, setDataTravel] = useState(data);

  const cardElements = dataTravel.map(data => {
    return <Card data={data} />
  })

  return (
    <div>
      {cardElements}
    </div>
  );
}
