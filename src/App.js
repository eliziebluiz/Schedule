// import logo from './logo.svg';
import { useEffect } from "react";
import "./global.css";
import Panel from "./pages/panel";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("302789544");
    ReactGA.pageview("/");
    // G-54J42DPK9M
  }, []);

  return <Panel />;
}

export default App;
