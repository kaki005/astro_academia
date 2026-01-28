export enum ELocationId {
  Osaka = "Osaka"
}
export enum FacurityId {
  SANKEN = "SANKEN",
  Handai = "Handai",
  Crev = "Crev",
}

export enum ERoleId {
  Bachelor = "Bachelor",
  Master = "Master",
  Doctor = "Doctor",
  Crev = "Crev",
  ResearcherS = "ResearcherS"
}

export class Experience {
  constructor(
    public facurity: FacurityId, // 所属機関
    public start: Date,
    public role: ERoleId,
    public location: ELocationId,
    public end?: Date,
  ) { }
}

export class Education {
  constructor(
    public facurity: FacurityId, // 所属機関
    public start: Date,
    public role: ERoleId,
    public location: ELocationId,
    public end?: Date,
  ) { }
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  location: string;
  link?: string;
  abstract?: string;
  git_url: string;
}

export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}

export function isEducation(element: Education | Experience): element is Education {
  return 'school' in element && 'degree' in element;
}

export function isSkill(element: Skill | Publication): element is Skill {
  return 'description' in element;
}

export function isPublication(element: Skill | Publication): element is Publication {
  return 'authors' in element;
}
