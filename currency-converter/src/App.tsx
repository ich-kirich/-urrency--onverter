import { Container, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/normalize.css";
import "./styles/index.scss";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Container maxWidth="sm" className="App">
          <AppRouter />
        </Container>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
