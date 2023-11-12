import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [plants, setPlants] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(plantsArr=>setPlants(plantsArr))
  },[])

  function handleAddNewPlant(newPlant){
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  function handleUpdateSearch(newSearch){
    setSearchTerm(newSearch)
  }
  return (
    <main>
      <NewPlantForm onAddNewPlant={handleAddNewPlant}/>
      <Search searchTerm={searchTerm} onUpdateSearch={handleUpdateSearch}/>
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
