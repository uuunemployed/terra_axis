import { Main } from "../../components/Main/Main";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Services } from "./components/Servises";
import { Testimonials } from "./components/Testimonials";
import { WhyUs } from "./components/WhyUs";
import { WorkRegions } from "./components/WorkRegions";

export const HomePage = () => {
  return (
    <Main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <WorkRegions />
      <Testimonials />
    </Main>
  );
};
