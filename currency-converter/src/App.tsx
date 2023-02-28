import { Container } from "@mui/material";
import CurrencyList from "./components/CurrencyList/CurrencyList";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="App">
        <CurrencyList />
      </Container>
    </>
  );
}

export default App;
