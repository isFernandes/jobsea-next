import { InputHTMLAttributes } from "hoist-non-react-statics/node_modules/@types/react";

import { forwardRef } from "react";
import { Input } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input {...props} ref={ref} />;
});

InputText.displayName = "InputText";

export default InputText;
