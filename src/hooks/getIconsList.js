import { ICONS } from "@constants/icons";

// Función que recibe la categoría y retorna un arreglo con { name, Icon }
export const getIconsList = (category) => {
  const selectedCategory = ICONS[category];

  if (!selectedCategory) return [];

  // Convertimos el objeto en un array
  return Object.entries(selectedCategory).map(([name, Icon]) => ({
    name,
    Icon,
  }));
};
