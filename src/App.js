// import logo from './logo.svg';
import { useEffect } from "react";
import "./global.css";
import Panel from "./pages/panel";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-54J42DPK9M");
    ReactGA.pageview("Init page view");
    // G-54J42DPK9M
  }, []);

  return <Panel />;
}

export default App;
