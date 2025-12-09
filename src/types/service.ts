
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

// Тип для об'єкта "purpose" (Для чого потрібно)
export interface ServicePurpose {
  title: string;
  items: string[];
}

// Головний тип послуги
export interface Service {
  id: number;
  slug: string;           // Унікальний URL-ідентифікатор (наприклад, 'mining-geodesy')
  title: string;          // H1 заголовок
  definition: string;     // Текст "Що таке..."
  
  purpose: ServicePurpose; // Об'єкт з пунктами призначення
  
  types: ServiceType[];    // Масив видів робіт
  
  features: string;        // Текстовий опис особливостей
  
  application_areas: string[]; // Масив сфер застосування
  
  includes: string[];      // Масив "Що включає послуга"
  
  process: ServiceProcessStep[]; // Масив кроків виконання
}