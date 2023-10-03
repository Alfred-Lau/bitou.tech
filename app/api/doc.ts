import matter from 'gray-matter';
import fs from 'fs-extra';
import { parseLine } from '@/utils/format';

const getNestedSidebar = (data: API.SidebarItem[]): API.SidebarItem[] => {
  for (let i = 0; i < data.length; i++) {
    const section = data[i];
    const nextSection = data[i + 1];

    if (nextSection && nextSection?.depth > section?.depth) {
      data.splice(i + 1, 1);
      section.children = section.children || [];
      section.children.push(nextSection);
      getNestedSidebar(section.children);
      i--;
    }
  }

  return data;
};

export const getSidebar = (): {
  sidebar: API.SidebarItem[];
  expandedList: string[];
} => {
  const md = fs.readFileSync(
    `${process.cwd()}/content/docs/_layout.md`,
    'utf-8'
  );
  const { data, content } = matter(md);
  const sidebar: API.SidebarItem[] = [];
  const lines = content.trim().split('\n');

  let currentSection: API.SidebarItem | null = null;

  lines.forEach((line) => {
    const [depth, title, url] = parseLine(line);
    if (depth !== null) {
      currentSection = { title, url, depth };
      sidebar.push(currentSection);
    } else if (currentSection && title) {
      currentSection.children = currentSection.children || [];
      currentSection.children.push({
        title,
        url,
        depth: currentSection?.depth + 1,
      });
    }
  });

  const docs = [] as any;
  return {
    sidebar: getNestedSidebar(sidebar),
    expandedList: data.expand_section_list,
  };
};
