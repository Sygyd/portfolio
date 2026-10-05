export type Language = "es" | "en";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  heroBadge: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  stack: string[];
  architectureOverview: string;
  modules: {
    title: string;
    badge: string;
    description: string;
    technicalHighlights: string[];
  }[];
  tradeOffs: {
    decision: string;
    reasoning: string;
    alternativeDiscarded: string;
    roiImpact: string;
  }[];
  codeSnippets: {
    title: string;
    language: string;
    filename: string;
    code: string;
  }[];
}

export interface Dictionary {
  common: {
    availableForHire: string;
    viewProject: string;
    close: string;
    techStack: string;
    keyMetrics: string;
    underTheHood: string;
    codeSnippets: string;
    architectureDiagram: string;
    interactiveDemo: string;
    copyCode: string;
    copied: string;
    liveDemo: string;
    githubRepo: string;
  };
  nav: {
    projects: string;
    architecture: string;
    simulators: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    role: string;
    titleFirstPart: string;
    titleHighlight: string;
    titleSecondPart: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      value: string;
      label: string;
      sub: string;
    }[];
  };
  projects: {
    sectionBadge: string;
    sectionTitle: string;
    sectionDesc: string;
    items: ProjectData[];
  };
  matrix: {
    title: string;
    badge: string;
    subtitle: string;
    columns: {
      dimension: string;
      mulato: string;
      puerto: string;
      tellex: string;
    }[];
  };
  simulators: {
    title: string;
    badge: string;
    subtitle: string;
    mulatoTitle: string;
    puertoTitle: string;
    tellexTitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsappLabel: string;
    whatsappText: string;
    emailLabel: string;
    copiedEmail: string;
    location: string;
    ctaDownloadCv: string;
  };
}
