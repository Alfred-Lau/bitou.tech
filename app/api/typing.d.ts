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
}
