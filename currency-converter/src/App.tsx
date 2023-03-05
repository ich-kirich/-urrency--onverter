import { Container, StyledEngineProvider } from "@mui/material";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import "./styles/normalize.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Container maxWidth="sm" className="App">
        <MainPage />
      </Container>
    </StyledEngineProvider>
  );
}

export default App;
