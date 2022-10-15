import "./style/App.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <LandingPage />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
