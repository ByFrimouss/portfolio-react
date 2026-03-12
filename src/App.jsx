import Router from "./router/router";
import "./App.css";
import "./styles/main.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
