export interface Country {
  name: string;
  code: string;
  iso: string;
}

export interface LinkProps {
  id: number;
  href: string;
  label: string;
  icon?: boolean;
}

export interface NavbarProps {
  data?: string;
}
export interface FooterProps {
  data?: string;
}
