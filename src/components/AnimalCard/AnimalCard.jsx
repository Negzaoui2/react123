import { Card, CardMedia, CardContent, Typography } from "@mui/material";
function AnimalCard({ name, description, id, imgSrc }) {
  return (
    <Card>
      <CardMedia component="img" image={imgSrc} alt={name} height="300" />

      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body 1">{description}</Typography>
      </CardContent>
    </Card>
  );
}
export default AnimalCard;
