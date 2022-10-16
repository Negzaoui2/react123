import { Grid } from "@mui/material";
import AnimalCard from "./../AnimalCard/AnimalCard";

function ListAnimal({ animals }) {
  return (
    <Grid container spacing={3}>
      {animals.map((animal) => {
        return (
          <Grid xs={12} sm={6} md={3} item key={animal.id}>
            <AnimalCard
              name={animal.name}
              imgSrc={animal.imgSrc}
              description={animal.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ListAnimal;
