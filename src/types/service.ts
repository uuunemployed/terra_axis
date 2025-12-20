
// Тип для об'єкта всередині масиву "types" (Види послуг)
export interface ServiceType {
  title: string;
  description: string;
}

// Тип для об'єкта "process" (Кроки виконання)
export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServicePurpose {
  title: string;
  items: string[];
}

export interface Service {
  id: number;
  slug: string;           
  title: string;          
  definition: string;
  image: string;
  subtitle: string;
  
  purpose: ServicePurpose;
  types: ServiceType[];  
  features: string; 
  application_areas: string[]; 
  includes: string[];  
  process: ServiceProcessStep[]; 
}