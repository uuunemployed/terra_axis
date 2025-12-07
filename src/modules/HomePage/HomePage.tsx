import { Main } from "../../components/Main/Main";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Services } from "./components/Servises";
import { WhyUs } from "./components/WhyUs";

export const HomePage = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
    </Main>
  );
};
