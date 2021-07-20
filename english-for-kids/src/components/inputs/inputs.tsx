import { InputProps } from "./inputs-props-interface";

export const Input = ({
  label,
  type,
  labelFor,
  inputClass,
  register,
  required,
}: InputProps): JSX.Element => (
  <>
    <label htmlFor={labelFor}>
      {label} :
      <input
        type={type}
        id={labelFor}
        {...register(label, { required })}
        className={inputClass}
        placeholder={label}
        required={required}
      />
    </label>
  </>
);
