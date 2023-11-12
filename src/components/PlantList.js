import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {

  const filteredPlants = plants.filter(plant=>{
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const plantCards = filteredPlants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
