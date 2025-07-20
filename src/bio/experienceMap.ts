import experiences, { CompanySource, Experience } from "./experience";

export default class ExperienceMap {
  private experiences: Experience[];
  private model?: ExperienceModel[];

  constructor( experiences: Experience[] ) {
    this.experiences = experiences;

    this.modelExperiences();
  }

  mapExperiences(): string {
    return this.model?.map((em) => {
      return `# Company: ${em.source} - Role: ${em.role}\n\n## Projects \n### ` + em.experiences?.map(ee => ee.label + `\n- Tech Stack: ${ee.tech.join(', ')}\n- Purpose: ${ee.purpose}\n- Outcome: ${ee.outcome}`).join("\n### ")
    }).join("\n\n\n");
  }

  modelExperiences(): void {
    var model: ExperienceModel[] = [];

    this.experiences.map((exp) => {
      const source = exp.source;
      const role = exp.role;

      let tmp = model.find(m => m.source === source && m.role === role);

      if (!tmp) {
        tmp = { source, role, experiences: [exp] };
        model.push(tmp);
      }
      else tmp.experiences.push(exp);
    });

    this.model = model;
  }
}

type ExperienceModel = {
  source: CompanySource;
  role: string;
  experiences?: Experience[];
};