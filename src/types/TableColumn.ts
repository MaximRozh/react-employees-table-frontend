export interface TableColumn {
  id: string;
  label: string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  format?: (value: string | number) => string | number;
}
