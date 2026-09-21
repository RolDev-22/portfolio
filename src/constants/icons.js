import { IoLogoFigma } from "react-icons/io5";
import { SiCanvas } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { SiMiro } from "react-icons/si";
import { FaDrawPolygon } from "react-icons/fa";
import { SiGimp } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiJira } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiVercel } from "react-icons/si";
import { TbApiApp } from "react-icons/tb";

export const ICONS = {
  design: {
    figma: IoLogoFigma,
    canva: SiCanvas,
    figJam: MdDashboard,
    miro: SiMiro,
    drawIo: FaDrawPolygon,
    gimp: SiGimp,
  },
  developer: {
    html: FaHtml5,
    css: FaCss3Alt,
    js: FaSquareJs,
    react: FaReact,
    jquery: SiJquery,
    nodeJs: FaNodeJs,
  },
  tool: {
    github: FaGithub,
    jira: SiJira,
    supabase: SiSupabase,
    firebase: IoLogoFirebase,
    vercel: SiVercel,
    Api: TbApiApp,
  },
};
