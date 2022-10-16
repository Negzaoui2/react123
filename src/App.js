import "./App.css";
import { Typography } from "@mui/material";
import ListAnimal from "./components/ListAnimal/ListAnimal";
function App() {
  const data = [
    {
      id: 1,
      name: " cats",
      description:
        "Le lapin n'est pas un animal fait pour vivre en cage. Il a besoin de pouvoir gambader dans un espace sécurisé. Il aime également se cacher, sauter et se poster en hauteur pour voir de loin. Bien sûr, votre lapin a besoin de se défouler hors de son lieu de vie au mois 3 à 4 heures par jour",
      imgSrc:
        "https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80 446w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80 746w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80 892w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80 1046w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1346&q=80 1346w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80 1492w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80 1646w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1946&q=80 1946w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2092&q=80 2092w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2246&q=80 2246w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2546&q=80 2546w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2692&q=80 2692w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2846&q=80 2846w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3146&q=80 3146w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3292&q=80 3292w, https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3336&q=80 3336w",
    },
    {
      id: 2,
      name: "lions",
      description:
        "Le roi des animaux doit son surnom à un charisme imposant et à une flamboyante crinière qui rappelle le soleil. Le plus grand félin d'Afrique est surtout un puissant et redoutable prédateur dont les techniques d'embuscades et de chasse laissent peu de chance à ses proies.",
      imgSrc:
        "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=486&q=80 486w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80 786w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80 972w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80 1086w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80 1386w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1572&q=80 1572w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80 1686w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80 1986w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80 2172w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80 2286w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2586&q=80 2586w, https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2770&q=80 2770w",
    },
    {
      id: 3,
      name: "tigger ",
      description:
        "Les seuls animaux capables de tuer un tigre mâle adulte sont le crocodile de mer, le python réticulé, l'ours et une meute de loups ou de dholes. Mais généralement, le tigre n'a pas de prédateurs à l'âge adulte.",
      imgSrc:
        "https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=472&q=80",
    },
  ];
  return (
    <div className="App">
      <Typography variant="h4" style={{ textAlign: "center" }}>
        what is animal?
      </Typography>
      <Typography variant="body1" align="justify">
        An animal (from the Latin animus, vital principle) is a living being
        that feeds on organic substances. Today, the animal is defined as a
        complex and multicellular being, although protozoa were long considered
        unicellular animals. Animals have similar individuals, which is called a
        species. In Plato's Epinomis, the animal is defined as “the result of
        the union of a soul and a body in the same form”. Fauna is all animals.
      </Typography>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        My favorites
      </Typography>
      <br />
      <ListAnimal animals={data} />
    </div>
  );
}

export default App;
