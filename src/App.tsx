import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./shared/contexts/ThemeProvider";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./shared/utils/useScrollToTop";

function App() {
  ScrollToTop();
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
