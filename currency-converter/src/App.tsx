import { Container } from "@mui/material";
import getRateCurrency from "./API/PostService";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <Header />
    </Container>
  );
}

export default App;
