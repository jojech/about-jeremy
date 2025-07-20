import s4experiences from "./s4/experience";

export type CompanySource = 'Speak4' | 'VMW' | 'hobby' | 'freelance';

export type Experience = {
  label: string;
  source: CompanySource;
  tech: string[];
  title?: string;
  role: string;
  purpose: string;
  outcome: string;
  year: number;
  durationWeeks?: number;
  durationMonths?: number;
};

const experiences: Experience[] = [
  ...s4experiences,

];

export default experiences;