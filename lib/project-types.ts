export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  heroImage: string;
  description: string;
  client: string;
  year: string;
  role: string;
  website: string;
  portrait: boolean;
  published: boolean;
  order: number;
  template: number;
  video: { src: string; type: string }[];
  gallery?: string[];
  repeatInGrid?: boolean;
  additionalCategories?: string[];
};

export type ProjectPageProps = {
  project: Project;
  projectLinks: Record<string, string>;
};
