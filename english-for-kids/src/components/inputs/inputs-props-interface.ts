import { Path, UseFormRegister } from "react-hook-form";

export interface FormValues {
  login: string;
  pass: string;
  "Category Name": string;
  Image: string | FileList;
  "Word Name": string;
  "Translation Name": string;
  Sound: string | FileList;
}

export type InputProps = {
  label: Path<FormValues>;
  type: string;
  labelFor: string;
  inputClass: string;
  register: UseFormRegister<FormValues>;
  required: boolean;
};
