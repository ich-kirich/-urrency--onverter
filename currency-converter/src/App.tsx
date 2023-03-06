import { Container, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import "./styles/normalize.css";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Container maxWidth="sm" className="App">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
