import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import { HomePage } from "./modules/HomePage/HomePage";
import { ServicesPage } from "./modules/ServicesPage/ServicesPage";

export const Root = () => {
  return (
    <Router basename="/terra_axis">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="service/:serviceSlug" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
