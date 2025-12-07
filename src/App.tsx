import "./App.scss";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet/>
    </ThemeProvider>
  );
}

export default App;
