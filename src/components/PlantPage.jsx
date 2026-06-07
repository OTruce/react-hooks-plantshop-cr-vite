// import React from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   return (
//     <main>
//       <NewPlantForm />
//       <Search />
//       <PlantList />
//     </main>
//   );
// }

// export default PlantPage;


import PlantList from "./PlantList";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function PlantPage({ plants, onAddPlant, search, setSearch }) {
  return (
    <main>
      <Search search={search} setSearch={setSearch} />
      <NewPlantForm onAddPlant={onAddPlant} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;