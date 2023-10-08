declare namespace API {
  export interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
  }

  export type SidebarItem = {
    title: string | null;
    url: string | null;
    depth: number;
    children?: SidebarItem[];
    path?: number[];
  };

  export interface DocDetail {
    title: string;
    content: string;
    description: string;
    expand_section_list: string[];
    author: string;
    date: string;
    slug: string;
    feature_image: string;
    breadcrumbs: SidebarItem[];
    navigationLinks;
  }
}
