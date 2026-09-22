import { SERVICES } from "@constants/services";

export const getServicesList = () => {
  return Object.entries(SERVICES).map(([id, serviceData]) => ({
    id,
    Icon: serviceData.icon,
    title: serviceData.title,
    description: serviceData.description,
  }));
};
