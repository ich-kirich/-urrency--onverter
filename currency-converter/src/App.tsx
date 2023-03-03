import { Container, StyledEngineProvider } from "@mui/material";
import CurrencyList from "./components/CurrencyList/CurrencyList";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import "./styles/normalize.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Container maxWidth="sm" className="App">
        <CurrencyList />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
