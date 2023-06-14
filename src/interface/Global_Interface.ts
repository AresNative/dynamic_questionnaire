export interface InputI {
  id: any;
  tipo: "INPUT" | "CHECKBOX" | "TOGGLE" | "OPCMULTIPLE" | "SELECT";
  name: string;
  placeholder: string;
  require: boolean;
}
export interface selectI {
  input: InputI;
  options: any;
  multi: boolean;
}
export interface multipleChoiceI {
  input: InputI;
  options: any;
  multi: boolean;
  newSelect: InputI;
}
