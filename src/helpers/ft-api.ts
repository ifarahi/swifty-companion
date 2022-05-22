import type { ProjectType, RegularUserType, SkillType } from '../types';
import hasProps from '.';

export function mapProject(
  data: Record<string, Record<string, unknown>>,
): Record<string, unknown> {
  return {
    id: data.project.id,
    name: data.project.name,
    slug: data.project.slug,
    status: data.status,
    parentId: data.project.parent_id,
    isValidated: data['validated?'],
    finalMark: data.final_mark,
    isMarked: data.marked,
    projects: [],
  };
}

export function isProject(data: Record<string, unknown>): data is ProjectType {
  return hasProps(
    {
      id: ['number'],
    },
    data,
  );
}

export function mapUser(data: Record<string, unknown>): RegularUserType {
  const { maxLevel, skills } = createSkills(
    data.cursus_users as Record<string, unknown>[],
  );

  const user = {
    id: data.id,
    displayName: data.displayname,
    login: data.login,
    email: data.email,
    wallet: data.wallet,
    imageUrl: data.image_url,
    isStaff: data['staff?'],
    maxLevel: maxLevel,
    skills: skills,
    level: ftCursusLevel(data.cursus_users),
    projects: createProjects(
      data.projects_users as Record<string, Record<string, unknown>>[],
    ),
  };

  return user as RegularUserType;
}

function createSkills(cursusUsers: Record<string, unknown>[]): {
  maxLevel: number;
  skills: SkillType[];
} {
  const skills = cursusUsers
    .map(function pickSkills(item) {
      if (Array.isArray(item.skills)) {
        return item.skills;
      } else {
        return [];
      }
    })
    .flat();

  const maxLevel = maxSkillsLevel(skills);

  return { maxLevel, skills };
}

function maxSkillsLevel(skills: SkillType[]) {
  return skills.reduce(function getMax(acc, cur) {
    if (cur.level >= acc) {
      return cur.level;
    }
    return acc;
  }, -Infinity);
}

function createProjects(
  projectsUsers: Record<string, Record<string, unknown>>[],
): ProjectType[] {
  const projects = projectsUsers.map(function createProject(
    current,
  ): ProjectType {
    const project = mapProject(current);

    if (!isProject(project)) {
      throw new Error('object on a project');
    }

    return project;
  });

  return groupProjectsByParent(projects);
}

function groupProjectsByParent(projects: ProjectType[]): ProjectType[] {
  1;
  return projects.reduce(reducer, []);

  function reducer(group: ProjectType[], current: ProjectType) {
    if (current.parentId != null) {
      return group;
    }

    current.projects = projects.filter(
      (project) => project.parentId == current.id,
    );

    group.push(current);

    return group;
  }
}

function ftCursusLevel(cursus: unknown): number {
  if (Array.isArray(cursus)) {
    if (typeof cursus[0].level === 'number') {
      return cursus[0].level;
    }
  }
  return 0;
}
