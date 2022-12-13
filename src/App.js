import React, {useState} from "react";
import "./style.css";

import data from './data';

import Navbar from './Navbar';
import Card from './Card';

export default function App() {
  const [dataTravel, setDataTravel] = useState(data);

  const cardElements = dataTravel.map(data => {
    return <Card key={data.id} data={data} />
  })

  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
}
