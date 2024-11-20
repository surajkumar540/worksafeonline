export interface Country {
  name: String;
  code: String;
  iso: String;
}

export interface LinkProps {
  id: number;
  href: string;
  label: string;
  icon?: boolean;
}

export interface NavbarProps {
  data?: String;
}
export interface FooterProps {
  data?: String;
}
