import type { LinkedIcon } from "./icon";
import type { Person } from "./person";
import type { ImageMetadata } from "astro";
export enum ELocationId {
  Osaka = "Osaka",
  Hyogo = "Hyogo",
}
export enum FacurityId {
  Yoka = "Yoka",
  SANKEN = "SANKEN",
  Handai = "Handai",
  Crev = "Crev",
}

export enum EPublicationId {
  HeteroComp = "C1"
}

export enum ERoleId {
  Engineer = "Engineer",
  ResearcherS = "ResearcherS"
}
export enum EDegree {
  HighSchool = "HighSchool",
  Bachelor = "Bachelor",
  Master = "Master",
  Doctor = "Doctor",
}


export class Experience {
  constructor(
    public facurity: FacurityId, // 所属機関
    public start: Date,
    public role: ERoleId, // 所属名
    public location: ELocationId,
    public end?: Date,
  ) { }
}

export class Education {
  constructor(
    public degree: EDegree,
    public facurity: FacurityId, // 所属機関
    public start: Date,
    public location: ELocationId,
    public end?: Date,
  ) { }
}

export interface Skill {
  title: string;
  description: string;
}

export class Publication {
  constructor(
    public id: EPublicationId,
    public title: string,
    public authors: Person[],
    public links: LinkedIcon[],
    public isEnglish: boolean,
    public thumnail?: ImageMetadata,
    public abstract?: string,
    public conference?: string,
    public submit_num?: number,
    public accepted_num?: number,
    public location?: string,
    public date?: string,
  ) { }
}

export enum EAwardId {
  Kougakusyou = "Kougakusyou"
}


export class Award {
  constructor(
    public ID: EAwardId,
    public Link: string,
    public Day: Date,
  ) { }
}
