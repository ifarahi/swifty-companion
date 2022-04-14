export interface User {
  id: number;
  email: string;
  login: string;
  first_name: string;
  last_name: string;
  usual_full_name: string;
  usual_first_name: null | string;
  url: string;
  phone: string;
  displayname: string;
  image_url: string;
  new_image_url: string;
  staff?: boolean;
  correction_point: number;
  pool_month: string;
  pool_year: number;
  location: null | string;
  wallet: number;
  anonymize_date: string;
  created_at: string;
  updated_at: string;
  alumni: boolean;
  is_launched?: boolean;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface Cursus {
  id: number;
  created_at: string;
  name: number;
  slug: number;
}

export interface CursusUsers {
  grade: string;
  level: number;
  skills: Skill[];
  blackholed_at: null | string;
  id: number;
  begin_at: string;
  end_at: string;
  cursus_id: number;
  has_coalition: boolean;
  created_at: string;
  updated_at: string;
  user: User;
  cursus: Cursus;
  launcher: null | string;
}

export interface Project {
  id: number;
  name: number;
  slug: string;
  parent_id: number;
}

export interface ProjectUsers {
  id: number;
  occurrence: number;
  final_mark: null | number;
  status: string;
  validated?: null | boolean;
  current_team_id: number;
  project: Project;
  cursus_ids: number[];
  marked_at: null | string;
  marked: boolean;
  retriable_at: string;
  created_at: string;
  updated_at: string;
}

export type ProjectStatus =
  | 'finished'
  | 'in_progress'
  | 'searching_a_group'
  | 'parent';
