import { useParams } from "react-router-dom";
import { ServicesDetailSection } from "./modules/components/ServicesDetailSection";
import { useEffect, useMemo, useState } from "react";
import { getServices } from "../../api/services";
import type { Service } from "../../types/service";
import { InteractiveProcess } from "./modules/components/InteractiveProcess";
import { Calculator } from "../../components/Calculator";
import { FAQ } from "../../components/FAQ";

export const ServicesPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchedServices = getServices();
    fetchedServices
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  const service = useMemo(() => {
    return services.find((s) => s.slug === serviceSlug);
  }, [serviceSlug, services]);
  return (
    <>
      <ServicesDetailSection service={service} />
      <InteractiveProcess />
      <FAQ />
      <Calculator />
    </>
  );
};
