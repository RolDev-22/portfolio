import { SKILLS } from "@/constants/skills";

export const getSkillsList = () => {
  return Object.entries(SKILLS).map(([id, skillsData]) => ({
    id,
    Icon: skillsData.icon,
    title: skillsData.title,
    description: skillsData.description,
  }));
};
