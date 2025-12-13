import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./shared/contexts/ThemeProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
