export interface TextFieldType {
  id: number;
  desc: string;
  name: string;
  type: 'text' | 'number' | 'date';
  select?: boolean;
}
