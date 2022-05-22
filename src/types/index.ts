export type RootStackParamList = {
  Details: { userData: any };
  Login: undefined;
  Search: undefined;
};

export type SkillType = {
  id: number;
  name: string;
  level: number;
};

export type ProjectStatus =
  | 'finished'
  | 'in_progress'
  | 'searching_a_group'
  | 'parent';

export type ProjectType = {
  id: number;
  name: string;
  slug: string;
  status: ProjectStatus;
  parentId: number | null;
  finalMark: number | null;
  projects: ProjectType[];
  isValidated: boolean | null;
  isMarked: boolean;
};

export type RegularUserType = {
  id: number;
  displayName: string;
  login: string;
  email: string;
  wallet: number;
  imageUrl: string;
  isStaff: boolean;
  maxLevel: number;
  skills: SkillType[];
  projects: ProjectType[];
  level: number;
};
